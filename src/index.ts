import dotenv from 'dotenv';
import logger from '@src/log/logger';

import { fastify } from "fastify";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";
import routes from "./grpc/connect";

import express from 'express';

//For env File
dotenv.config();

// Boogie server for azure
const app = express();
app.listen(8080, () => {
  logger.info('Boogie server is listening at 8080');
});

async function main() {
  const server = fastify(
    {
      http2: true,
      logger: process.env.NODE_ENV === 'development'
    }
  );
  await server.register(fastifyConnectPlugin, {
    routes,
  });

  server.get("/", (_, reply) => {
    reply.type("text/plain");
    reply.send("Hello World!");
  });
  await server.listen({ host: "0.0.0.0", port: 5243 });
  logger.info("QApp Zeus is listening at", server.addresses());
}

void main();