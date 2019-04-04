import http from './BaseService';

const listUsers = (users) => http.get('/users', users)
  .then(res => res.data);


export default {
  listUsers
}