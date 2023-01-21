import app from "./app";
import { connectDB } from "./database";
import cors from "cors";
import router from "./routes/events.routes";
const PORT = 4000;

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());

app.use("/api/events", router);

app.listen(PORT, function() {
  console.log(`Listening http://localhost:${PORT}`);
});