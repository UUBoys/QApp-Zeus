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

export default {
  getEvents,
  getEvent,
  createEvent,
} as const;
