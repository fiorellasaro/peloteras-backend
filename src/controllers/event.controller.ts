import { Response, Request, NextFunction } from "express";
import Event from "../models/event.model";
import { IEvent } from "../schema/event.schema";

export const createEvent = async (
  req: Request<unknown, unknown, IEvent>,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
        location,
        date,
        hour,
        cost,
        quota,
        email,
    } = req.body;

    // search an existing food with the same code
    const eventFoundId = await Event.findOne({ email });
    // if a food with the same title is found
    if (eventFoundId)
      return res.status(400).json({ message: "Code event already exists" });

    // const eventFoundName = await Event.findOne({ name });
    // // if a food with the same title is found
    // if (eventFoundName)
    //   return res.status(400).json({ message: "Name event already exists" });

    // create a new event
    const newEvent = new Event({
        location,
        date,
        hour,
        cost,
        quota,
        email,
    });


    const savedEvent = await newEvent.save();

    res.json(savedEvent);
  } catch (error) {
    next(error);
  }
};

export const getEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    next(error);
  }
};

export const getEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const EventFound = await Event.findById(req.params.id);
    if (!EventFound) return res.status(204).json();
    return res.json(EventFound);
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const eventFound = await Event.findByIdAndDelete(req.params.id);

  if (!eventFound) return res.status(204).json();

  return res.status(204).json();
};

export const updateEvent = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const eventUpdated = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!eventUpdated) return res.status(204).json();
  return res.json(eventUpdated);
};
