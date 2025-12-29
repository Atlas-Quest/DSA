interface Event {
  id: string;
  eventType: string;
  timestamp: Date;
}

export function PreventDuplicateEvents(events: Array<Event>) {
  const duplicateEvents: Record<string, boolean> = {};

  for (const event of events) {
    if (duplicateEvents[event.id]) {
      console.log("Duplicate event found:", event);
    }

    duplicateEvents[event.id] = true;
  }
}
