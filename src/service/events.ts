import { Code, ConnectError } from "@connectrpc/connect";
import { prisma } from "@src/db/client";
import logger from "@src/log/logger";

const getEvents = async () => {
  const events = await prisma.event.findMany();
  return events;
};

const getEvent = async (uuid: string) => {
  const event = await prisma.event
    .findUnique({
      where: {
        uuid,
      },
    })
    .catch((e) => {
      if (e.code === "P2025") {
        throw new ConnectError("Event not found", Code.NotFound);
      }
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });
  return event;
};

const createEvent = async (
  name: string,
  establishmentId: number,
  start_date: Date,
  end_date: Date,
  price: number,
  maximumCapacity: number,
  description?: string,
  image?: string
) => {
  const event = await prisma.event
    .create({
      data: {
        name,
        description,
        establishmentId,
        image,
        start_date,
        end_date,
        price,
        maximumCapacity,
      },
    })
    .catch((e) => {
      logger.error(e);
      throw new ConnectError("Internal prisma error", Code.Internal);
    });
  return event;
};

const updateEvent = async (
  updater_id: number,
  establishment_id: number,
  uuid: string,
  name?: string,
  description?: string,
  start_date?: string,
  end_date?: string,
  image?: string,
  price?: number,
  maximumCapacity?: number
) => {
    //Check if user can update
    const updater = await prisma.moderators.findUnique({
        where: {
            establishment_id: establishment_id,
            user_id: updater_id,
        },
    }).catch((e) => {
        logger.error(e);
        throw new ConnectError("Internal prisma error", Code.Internal);
    });

    if(!updater || updater.role !== "MANAGER") {
        throw new ConnectError("User not allowed to update event", Code.PermissionDenied);
    }
  
    return await prisma.event.update({
        where: {
            uuid: uuid,
        },
        data: {
            name: name,
            description: description,
            start_date: start_date ? new Date(start_date) : undefined,
            end_date: end_date ? new Date(end_date) : undefined,
            image: image,
            price: price,
            maximumCapacity: maximumCapacity,
        },
        }).catch((e) => {
            if (e.code === "P2025") {
                throw new ConnectError("Event not found", Code.NotFound);
            }
            logger.error(e);
            throw new ConnectError("Internal prisma error", Code.Internal);
        });
};

export default {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
} as const;
