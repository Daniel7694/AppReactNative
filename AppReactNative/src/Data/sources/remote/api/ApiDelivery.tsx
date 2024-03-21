import axios from 'axios';
const ApiDelivery = axios.create({
 baseURL: 'https://10.175.81.109:3000/api',
 headers: {
 'Content-Type': 'application/json'
 }
});
export {ApiDelivery};