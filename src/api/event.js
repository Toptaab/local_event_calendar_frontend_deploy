import axios from '../configs/axios';

// ========================= Basic CRUD event ===================================//
export const getAllEvent = () => axios.get('/event');
export const getEvent = (eventId) => axios.get(`/event/${eventId}`);
export const createEvent = (data) => axios.post('/event', data);
export const updateEvent = (eventId, data) =>
  axios.put(`/event/${eventId}`, data);
export const deleteEvent = (eventId) => axios.delete(`/event/${eventId}`);


// ========================== upComing ==================================//

export const getUpcoming = () => axios.get('/event/upcoming');


// ========================== map ==================================//

export const getAllEventInScope = (data) => axios.post('/event/scope/', data);
export const getFilteredEvent = (data) => axios.post('/event/filter/', data);
export const getCalendarEvent = (data) => axios.post('/event/inRange/', data);
