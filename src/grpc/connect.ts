import { Code, ConnectError, ConnectRouter } from "@connectrpc/connect";
import { Zeus } from "./defs/proto/com/qapp/zeus/zeus_connect";
import EstablishmentService from "@src/service/establishments";
import EventService from "@src/service/events";
import { Establishment } from "@prisma/client";
import logger from "@src/log/logger";
import { com } from "@src/grpc/client/proto/com/qapp/hermes/hermes";
import { credentials } from "@grpc/grpc-js";
import { grpcToPromise } from "./utils/utils";

const client = new com.qapp.hermes.CreditServiceClient(
  process.env.HERMES_URL || "",
  credentials.createSsl()
);

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
      const establishment = (await EstablishmentService.getEstablishment(
        id
      )) as Establishment;

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
    async getEventsForEstablishment({ establishmentId }) {
      const events = await EventService.getEventsForEstablishment(
        establishmentId
      );

      return {
        events: events.map((e) => {
          return {
            id: e.uuid,
            name: e.name,
            description: e.description ?? undefined,
            establishmentId: e.establishmentId,
            image: e.image ?? undefined,
            startDate: e.start_date.toISOString(),
            endDate: e.end_date.toISOString(),
            price: e.price,
            maximumCapacity: e.maximumCapacity,
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
            id: e.uuid,
            name: e.name,
            description: e.description ?? undefined,
            establishmentId: e.establishmentId,
            image: e.image ?? undefined,
            startDate: e.start_date.toISOString(),
            endDate: e.end_date.toISOString(),
            price: e.price,
            maximumCapacity: e.maximumCapacity,
          };
        }),
      };
    },
    async getEvent({ id }) {
      const event = await EventService.getEvent(id);

      return {
        id: event.uuid,
        name: event.name,
        description: event.description ?? undefined,
        establishmentId: event.establishmentId,
        image: event.image ?? undefined,
        startDate: event.start_date.toISOString(),
        endDate: event.end_date.toISOString(),
        price: event.price,
        maximumCapacity: event.maximumCapacity,
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
      ticketName,
    }) {
      const event = await EventService.createEvent(
        name,
        establishmentId,
        new Date(startDate),
        new Date(endData),
        price,
        maximumCapacity,
        description,
        image
      );

      const ticketPurchaseRequest = new com.qapp.hermes.CreateEventTicketsRequest({
        event_id: event.uuid,
        price: price,
        quantity: maximumCapacity,
        ticket_name: ticketName,
      });

      await grpcToPromise<com.qapp.hermes.CreateEventTicketsResponse>(
        (callback) => {
          client.CreateEventTickets(ticketPurchaseRequest, callback);
        }
      );

      return {
        id: event.uuid,
        name: event.name,
        description: event.description ?? undefined,
        establishmentId: event.establishmentId,
        image: event.image ?? undefined,
        startDate: event.start_date.toISOString(),
        endDate: event.end_date.toISOString(),
        price: event.price,
        maximumCapacity: event.maximumCapacity,
      };
    },
    async isManagerOfEstablishment({ userId, establishmentId }) {
      const isManager = await EstablishmentService.isModerator(
        userId,
        establishmentId
      );

      return {
        isManager: isManager,
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
        id: event.uuid,
        name: event.name,
        description: event.description ?? undefined,
        establishmentId: event.establishmentId,
        image: event.image ?? undefined,
        startDate: event.start_date.toISOString(),
        endDate: event.end_date.toISOString(),
        price: event.price,
        maximumCapacity: event.maximumCapacity,
      };
    },
    async getEstablishmentForUser({ userId }) {
      const establishments = await EstablishmentService.getEstablishmentForUser(
        userId
      );

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
    async purchaseTicket({ userId, eventId, ticketId }) {
      const ticketPurchaseRequest = new com.qapp.hermes.PurchaseRequest({
        event_id: eventId,
        user_id: userId,
        ticket_id: ticketId,
      });

      const ticketPurchase =
        await grpcToPromise<com.qapp.hermes.PurchaseTicketResponse>(
          (callback) => {
            client.Purchase(ticketPurchaseRequest, callback);
          }
        );

      return {
        eventId: eventId,
        userId: ticketPurchase.creditOperation.user_id,
        newBalance: ticketPurchase.creditOperation.new_balance,
        id: ticketPurchase.Ticket.id,
      };
    },
    async removeEvent({ updaterId, establishmentId, eventId }) {
      const removedEvent = await EventService.removeEvent(updaterId, establishmentId, eventId);

      const removeTickets = new com.qapp.hermes.RemoveEventTicketsRequest({
        event_id: eventId,
      });

      const removeTicketsResponse = await grpcToPromise<com.qapp.hermes.RemoveEventTicketsResponse>(
        (callback) => {
          client.RemoveEventTickets(removeTickets, callback);
        }
      );

      if(!removeTicketsResponse.success) {
        logger.error("Failed to remove tickets for event", eventId);
      }

      return {
        eventId: removedEvent.uuid,
      };
    },
  });
};
