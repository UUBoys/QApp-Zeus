import { Code, ConnectError } from "@connectrpc/connect";
import { Role } from "@prisma/client";
import { prisma } from "@src/db/client";
import logger from "@src/log/logger";

const getEstablishments = async () => {
  return await prisma.establishment.findMany().catch((e) => {
    logger.error(e);
    throw new ConnectError("Internal prisma error", Code.Internal);
  });
};

const getEstablishment = async (id: number) => {
  return await prisma.establishment
    .findUnique({
      where: {
        id: id,
      },
    })
    .catch((e) => {
      if (e.code === "P2025") {
        throw new ConnectError("Establishment not found", Code.NotFound);
      }
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });
};

const getEstablishmentForUser = async (userId: number) => {
  return await prisma.establishment.findMany({
    where: {
      ownerId: userId,
    },
  });
};

const createEstablishment = async (
  ownerId: number,
  name: string,
  street: string,
  city: string,
  country: string,
  coverImage?: string,
  profileImage?: string,
  description?: string
) => {
  const new_establishment = await prisma.establishment
    .create({
      data: {
        ownerId: ownerId,
        name: name,
        description: description,
        street: street,
        city: city,
        country: country,
        coverImage: coverImage,
        profileImage: profileImage,
      },
    })
    .catch((e) => {
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });

  await prisma.moderators
    .create({
      data: {
        establishment_id: new_establishment.id,
        user_id: ownerId,
        role: "MANAGER",
      },
    })
    .catch((e) => {
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });

  return new_establishment;
};

const updateEstablishment = async (
  updater_id: number,
  establishment_id: number,
  name?: string,
  description?: string,
  street?: string,
  city?: string,
  country?: string,
  coverImage?: string,
  profileImage?: string
) => {
    // Check if updater is owner
    const updater = await prisma.moderators.findUnique({
        where: {
            user_id_establishment_id: {
                user_id: updater_id,
                establishment_id: establishment_id,
            }
        },
    }).catch((e) => {
        logger.error(e);
        throw new ConnectError("Internal prisma error", Code.Internal);
    });

    if(updater?.role !== "MANAGER") {
        throw new ConnectError("Current user is not allowed to update establishment", Code.PermissionDenied);
    }

    return await prisma.establishment
    .update({
      where: {
        id: establishment_id,
      },
      data: {
        name: name,
        description: description,
        street: street,
        city: city,
        country: country,
        coverImage: coverImage,
        profileImage: profileImage,
      },
    })
    .catch((e) => {
      if (e.code === "P2025") {
        throw new ConnectError("Establishment not found", Code.NotFound);
      }
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });
};

const setEstablishmentRole = async (
  updater_id: number,
  establishmentId: number,
  userId: number,
  role: string
) => {
  // Validate role to prisma enum
  if (Object.values(Role).includes(role as Role) === false) {
    throw new ConnectError("Invalid role", Code.InvalidArgument);
  }

  // Check if updater is moderator
  const updater = await prisma.moderators
    .findUnique({
      where: {
        user_id_establishment_id: {
          user_id: updater_id,
          establishment_id: establishmentId,
        },
        role: "MANAGER",
      },
    })
    .catch((e) => {
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });

  if (updater === null) {
    throw new ConnectError(
      "Current user is not allowed to add moderators",
      Code.PermissionDenied
    );
  }

  return await prisma.moderators
    .upsert({
      where: {
        user_id_establishment_id: {
          user_id: userId,
          establishment_id: establishmentId,
        },
      },
      create: {
        user_id: userId,
        establishment_id: establishmentId,
        role: role as Role,
      },
      update: {
        role: role as Role,
      },
    })
    .catch((e) => {
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });
};

export default {
  getEstablishments,
  getEstablishment,
  getEstablishmentForUser,
  createEstablishment,
  updateEstablishment,
  setEstablishmentRole,
} as const;
