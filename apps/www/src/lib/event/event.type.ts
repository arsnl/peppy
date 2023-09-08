import { type z } from "zod";
import { type eventSchema } from "@/lib/event/event.schema";

export type Event = z.infer<typeof eventSchema>;
