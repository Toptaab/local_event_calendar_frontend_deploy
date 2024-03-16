import axios from '../configs/axios';

// export const register = user => axios.post('/auth/register',user)

export const apiLogin = (user) => axios.post('/user/login', user);

export const apiRegister = (data) => axios.post('/user/register', data);

export const authMe = () => axios.get('user/auth');
