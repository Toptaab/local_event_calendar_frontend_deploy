import axios from '../configs/axios';

export const createReminder = (eventId) =>
  axios.post(`user/reminder/${eventId}`);
export const deleteReminder = (eventId) =>
  axios.delete(`user/reminder/${eventId}`);
export const updateUser = (data) => axios.put(`/user`, data);
