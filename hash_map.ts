const seen = new Set<string>();

export function isDuplicateEvent(eventId: string): boolean {
  if (seen.has(eventId)) return true;
  seen.add(eventId);
  return false;
}
