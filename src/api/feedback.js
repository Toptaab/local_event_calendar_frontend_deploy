import axios from '../configs/axios';

const createFeedback = (eventId) => axios.post(`/event/${eventId}/feedback`);

export default createFeedback;