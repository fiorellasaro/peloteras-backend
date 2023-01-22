import mongoose from 'mongoose';
import config from "./config/config";

const connectionString = config.DB.URI || "";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10, // use a connection pool with a size of 10 connections
  keepAlive: true, // use a connection keep-alive
};

export const database = () =>
  mongoose
    .set('strictQuery', true)
    .connect(connectionString, options)
    .then(() => process.stdout.write('MongoDB Connected!\n'))
    .catch((err) => {
      process.stdout.write(JSON.stringify(err));
      process.exit(1);
    });

export default database;