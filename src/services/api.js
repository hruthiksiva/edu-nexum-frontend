import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const onboardTeacher = (data) => api.post('/teachers/onboard', data);
export const getWelcomeMessage = () => api.get('/');