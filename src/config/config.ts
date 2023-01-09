import { config } from "dotenv";
config();
export default {
  PORT: process.env.PORT,
  DB: {
    URI: process.env.MONGODB_URI,
  },
};