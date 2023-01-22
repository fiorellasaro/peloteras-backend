import cors from "cors";
import * as bodyParser from "body-parser";

import express from "express";

import { database } from "./database";
import eventsRoutes from "./routes/events.routes";

export class Application {
  public express!: express.Application;

  constructor() {
    this.initialize()
      .then(() => process.stdout.write("Server started\n"))
      .catch((err) => {
        process.stderr.write(err.message);
        process.exit(1);
      });
  }

  protected async initialize(): Promise<void> {
    await database();
    const BODY_PARSER_LIMIT = "50mb";

    this.express = express();
    this.express.use(cors());
    this.express.use(bodyParser.json({ limit: BODY_PARSER_LIMIT }));
    this.express.use(
      bodyParser.urlencoded({ limit: BODY_PARSER_LIMIT, extended: true })
    );
    this.express.use(eventsRoutes);
  }
}

export default new Application().express;