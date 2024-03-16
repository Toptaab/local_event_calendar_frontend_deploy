import axios from '../configs/axios';

const getCategory = () => axios.get('/category');

export default getCategory;
