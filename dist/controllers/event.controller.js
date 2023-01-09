"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.deleteEvent = exports.getEvent = exports.getEvents = exports.createEvent = void 0;
const event_model_1 = __importDefault(require("../models/event.model"));
const createEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { location, date, hour, cost, quota, email, } = req.body;
        // search an existing food with the same code
        const eventFoundId = yield event_model_1.default.findOne({ email });
        // if a food with the same title is found
        if (eventFoundId)
            return res.status(400).json({ message: "Code event already exists" });
        // const eventFoundName = await Event.findOne({ name });
        // // if a food with the same title is found
        // if (eventFoundName)
        //   return res.status(400).json({ message: "Name event already exists" });
        // create a new event
        const newEvent = new event_model_1.default({
            location,
            date,
            hour,
            cost,
            quota,
            email,
        });
        const savedEvent = yield newEvent.save();
        res.json(savedEvent);
    }
    catch (error) {
        next(error);
    }
});
exports.createEvent = createEvent;
const getEvents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield event_model_1.default.find();
        return res.json(events);
    }
    catch (error) {
        next(error);
    }
});
exports.getEvents = getEvents;
const getEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const EventFound = yield event_model_1.default.findById(req.params.id);
        if (!EventFound)
            return res.status(204).json();
        return res.json(EventFound);
    }
    catch (error) {
        next(error);
    }
});
exports.getEvent = getEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventFound = yield event_model_1.default.findByIdAndDelete(req.params.id);
    if (!eventFound)
        return res.status(204).json();
    return res.status(204).json();
});
exports.deleteEvent = deleteEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const eventUpdated = yield event_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!eventUpdated)
        return res.status(204).json();
    return res.json(eventUpdated);
});
exports.updateEvent = updateEvent;
