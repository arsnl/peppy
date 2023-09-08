import va from "@vercel/analytics";
import { eventSchema } from "@/lib/event/event.schema";
import { type Event } from "@/lib/event/event.type";

export const trackEvent = (input: Event): void => {
  const event = eventSchema.parse(input);
  if (event) {
    va.track(event.name, event.properties);
  }
};
