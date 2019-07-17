
export const initEventsAction = events => ({
  type: 'INIT_EVENTS',
  payload: events,
});

export const removeEventAction = id => ({
  type: 'REMOVE_EVENT',
  payload: id,
});

// export const updateEventAction = datasForUpdate => ({
//   type: 'UPDATE_EVENT',
//   payload: datasForUpdate,
// });