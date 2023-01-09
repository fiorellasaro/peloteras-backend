import express from "express";
// import morgan from "morgan";
import cors from "cors";

import eventsRoutes from "./routes/events.routes";

// inicializaciones
const app = express();

//middlewares
// app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(eventsRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found") as any;
  error.status = 404;
  next(error);
});

app.use(
  (
    error: { status: any; message: any },
    req: any,
    res: {
      status: (arg0: any) => void;
      json: (arg0: { error: { message: any } }) => void;
    },
    next: any
  ) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  }
);

export default app;
