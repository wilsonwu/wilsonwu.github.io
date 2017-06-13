import axios from 'axios';
import store from '@/vuex/store'

let baseURL = 'http://www.xxx.com/api';


export const TestApi = xxx => {
	console.log(email);
	return axios.get(`${baseURL}/xxx/xxx/` + xxx);
};
