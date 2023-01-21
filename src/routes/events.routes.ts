import { Router } from "express";


const router = Router();

import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
  updateEvent,
} from "../controllers/event.controller";
import { CreateEventSchema } from "../schema/event.schema";

router.get("/events", getEvents);

router.get("/events/:id", getEvent);
 
router.post("/events", createEvent);

router.delete("/events/:id", deleteEvent);

router.put("/events/:id", updateEvent);

export default router;
