
import { z } from "zod";

export const CreateEventSchema = z.object({
  body: z.object({
    location: z.string().nonempty(),
    date: z.string().nonempty(),
    hour: z.string().nonempty(),
    cost: z.number().nonnegative(),
    quota: z.number().nonnegative(),
    email: z.string().email(),
  }),
});

export type CreateEventType = z.infer<typeof CreateEventSchema>["body"];