import app from "./app";
import { connectDB } from "./database";
import config from "./config/config";

const PORT = config.PORT || 4000;

async function main() {
  await connectDB();
  app.listen(PORT);
  console.log("Server on port ", PORT);
}

main();