import axios from '../configs/axios';

const getStatistic = () => axios.get('/user/statistic');

export default getStatistic;