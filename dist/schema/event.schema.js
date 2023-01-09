"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventSchema = void 0;
const zod_1 = require("zod");
exports.CreateEventSchema = zod_1.z.object({
    body: zod_1.z.object({
        location: zod_1.z.string().nonempty(),
        date: zod_1.z.string().nonempty(),
        hour: zod_1.z.string().nonempty(),
        cost: zod_1.z.number().nonnegative(),
        quota: zod_1.z.number().nonnegative(),
        email: zod_1.z.string().email(),
    }),
});
