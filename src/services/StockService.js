import http from './BaseService';


const listStocks = () => http.get('/stocks')
  .then(res => res.data);


export default {
  listStocks
}
