import "dotenv/config";
import "reflect-metadata";

import gracefulShutdown from "./shared/events/gracefulShutdown";

import application from "./app";
import logger from "./shared/utils/Logger";

import { ShutdownEnum } from "./shared/enums/shutdown.enum";

const PORT = process.env.PORT || 4000;

const server = application.listen(PORT, () => {
  logger.log(`Server running on port ${PORT}`);
});
process.on("SIGINT", gracefulShutdown(server, "SIGINT"));
process.on("SIGTERM", gracefulShutdown(server, "SIGTERM"));
process.on("exit", (code) => {
  logger.info(`Exit signal received. Code: ${code}`);
});
process.on(ShutdownEnum.uncaughtException, (error: any, origin: any) => {
  logger.info(`\n${origin} signal received.\n${error}`);
});
process.on(ShutdownEnum.unhandledRejection, (error: any, origin: any) => {
  if (error) logger.error(JSON.stringify(error));
  logger.error(`\n${origin} signal received.\n${error}`);
  logger.error(
    `\n${ShutdownEnum.unhandledRejection} signal received.\n${error}`
  );
});
