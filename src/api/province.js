import axios from '../configs/axios';

const getProvince = () => axios.get('/province');

export default getProvince;
