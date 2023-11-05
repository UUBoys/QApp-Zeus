import { Code, ConnectError, ConnectRouter } from "@connectrpc/connect";
import { Zeus } from "./defs/proto/com/qapp/zeus/zeus_connect";
import EstablishmentService from "@src/service/establishments";
import EventService from "@src/service/events";
import { prisma } from "@src/db/client";
import { Establishment } from "@prisma/client";

export default (router: ConnectRouter) => {
  router.service(Zeus, {
    async getEstablishments(_) {
      const establishments = await EstablishmentService.getEstablishments();

      return {
        establishments: establishments.map((e) => {
          return {
            id: e.id,
            name: e.name,
            description: e.description ?? undefined,
            street: e.street,
            city: e.city,
            country: e.country,
            profileImage: e.profileImage ?? undefined,
            coverImage: e.coverImage ?? undefined,
          };
        }),
      };
    },
    async getEstablishment({ id }) {
      const establishment = (await prisma.establishment.findUnique({
        where: {
          id: id,
        },
      })) as Establishment;

      return {
        id: establishment.id,
        name: establishment.name,
        description: establishment.description ?? undefined,
        street: establishment.street,
        city: establishment.city,
        country: establishment.country,
        profileImage: establishment.profileImage ?? undefined,
        coverImage: establishment.coverImage ?? undefined,
      };
    },
    async createEstablishment({
      name,
      description,
      street,
      city,
      country,
      coverImage,
      profileImage,
      ownerId,
    }) {
      const establishment = await EstablishmentService.createEstablishment(
        ownerId,
        name,
        street,
        city,
        country,
        coverImage,
        profileImage,
        description
      );

      return {
        id: establishment.id,
        name: establishment.name,
        description: establishment.description ?? undefined,
        street: establishment.street,
        city: establishment.city,
        country: establishment.country,
        coverImage: establishment.coverImage ?? undefined,
        profileImage: establishment.profileImage ?? undefined,
        ownerId: establishment.ownerId,
      };
    },
    async getEvents(_) {
      const events = await EventService.getEvents();

      return {
        events: events.map((e) => {
          return {
            uuid: e.uuid,
            name: e.name,
            description: e.description ?? undefined,
            establishment_id: e.establishmentId,
            image: e.image ?? undefined,
            start_date: e.start_date.toISOString(),
            end_date: e.end_date.toISOString(),
            price: e.price,
            maximumCapacity: e.maximumCapacity,
          };
        }),
      };
    },
    async createEvent({
      name,
      description,
      establishmentId,
      startDate,
      endData,
      price,
      maximumCapacity,
      image,
    }) {
      const event = await EventService.createEvent(
        name,
        establishmentId,
        new Date(startDate),
        new Date(endData),
        maximumCapacity,
        price,
        description,
        image
      );

      return {
        id: event.uuid,
        name: event.name,
        description: event.description ?? undefined,
        establishment_id: event.establishmentId,
        image: event.image ?? undefined,
        start_date: event.start_date.toISOString(),
        end_data: event.end_date.toISOString(),
        price: event.price,
        maximumCapacity: event.maximumCapacity,
      };
    },
    async setEstablishmentRole({ updaterId, establishmentId, userId, role }) {
      const new_role = await EstablishmentService.setEstablishmentRole(
        updaterId,
        establishmentId,
        userId,
        role
      );

      return {
        establishmentId: establishmentId,
        userId: userId,
        role: new_role.role,
      };
    },
    async updateEstablishment({
      updaterId,
      id,
      name,
      description,
      street,
      city,
      country,
      coverImage,
      profileImage,
    }) {
      const establishment = await EstablishmentService.updateEstablishment(
        updaterId,
        id,
        name,
        street,
        city,
        country,
        coverImage,
        profileImage,
        description
      );

      return {
        id: establishment.id,
        name: establishment.name,
        description: establishment.description ?? undefined,
        street: establishment.street,
        city: establishment.city,
        country: establishment.country,
        coverImage: establishment.coverImage ?? undefined,
        profileImage: establishment.profileImage ?? undefined,
        ownerId: establishment.ownerId,
      };
    },
    async updateEvent({
      updaterId,
      establishmentId,
      uuid,
      name,
      description,
      startDate,
      endDate,
      image,
      price,
      maximumCapacity,
    }) {
      const event = await EventService.updateEvent(
        updaterId,
        establishmentId,
        uuid,
        name,
        description,
        startDate,
        endDate,
        image,
        price,
        maximumCapacity
      );

      return {
        uuid: event.uuid,
        name: event.name,
        description: event.description ?? undefined,
        establishment_id: event.establishmentId,
        image: event.image ?? undefined,
        start_date: event.start_date.toISOString(),
        end_date: event.end_date.toISOString(),
        price: event.price,
        maximumCapacity: event.maximumCapacity,
      };
    },
  });
};
