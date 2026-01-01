export type TenantId = string;
export type EventTimestamps = readonly number[];
export type WindowState = ReadonlyMap<TenantId, EventTimestamps>;

export type Result = {
  readonly allowed: boolean;
  readonly state: WindowState;
};

export const allow = (
  windowMs: number,
  limit: number,
  state: WindowState,
  key: TenantId,
  nowMs: number = Date.now()
): Result => {
  if (windowMs <= 0) throw new Error("windowMs must be greater than 0");
  if (limit <= 0) throw new Error("limit must be greater than 0");

  // this is the invariant i.e. Give me the history of events for this Key
  const prev = state.get(key) ?? [];
  // anything older than this no longer counts
  const cutoff = nowMs - windowMs;
  // forget the past, only keep events still inside the window. Everything else is bookkeeping.
  const nextEvents = prev.filter((ts) => ts > cutoff);

  // If I already have too many events in this window reject it
  if (nextEvents.length > limit) {
    return { allowed: false, state };
  }

  const updated: EventTimestamps = [...nextEvents, nowMs];
  // create a new version of the state where only this key is updated, so the original state is unchanged
  const nextState: WindowState = new Map(state).set(key, updated);

  return { allowed: true, state: nextState };
};
