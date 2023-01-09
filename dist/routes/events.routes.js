"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const event_controller_1 = require("../controllers/event.controller");
router.get("/events", event_controller_1.getEvents);
router.get("/events/:id", event_controller_1.getEvent);
router.post("/events", event_controller_1.createEvent);
router.delete("/events/:id", event_controller_1.deleteEvent);
router.put("/events/:id", event_controller_1.updateEvent);
exports.default = router;
//# sourceMappingURL=events.routes.js.map