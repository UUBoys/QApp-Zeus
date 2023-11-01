import { Code, ConnectError, ConnectRouter } from "@connectrpc/connect";
import { Zeus } from "./defs/proto/com/qapp/zeus/zeus_connect";
import EstablishmentService from "@src/service/establishments";
import EventService from "@src/service/events";

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
            image: e.image ?? undefined,
            ownerId: e.ownerId,
          };
        }),
      };
    },
    async createEstablishment({
      name,
      description,
      street,
      city,
      country,
      image,
      ownerId,
    }) {
      const establishment = await EstablishmentService.createEstablishment(
        ownerId,
        name,
        street,
        city,
        country,
        image,
        description
      );

      return {
        id: establishment.id,
        name: establishment.name,
        description: establishment.description ?? undefined,
        street: establishment.street,
        city: establishment.city,
        country: establishment.country,
        image: establishment.image ?? undefined,
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
            establishmentId: e.establishmentId,
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
        uuid: event.uuid,
        name: event.name,
        description: event.description ?? undefined,
        establishmentId: event.establishmentId,
        image: event.image ?? undefined,
        start_date: event.start_date.toISOString(),
        end_data: event.end_date.toISOString(),
        price: event.price,
        maximumCapacity: event.maximumCapacity,
      };
    },
  });
};
