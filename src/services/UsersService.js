import http from './BaseService';

const listUsers = (user) => http.get('/users', user)
  .then(res => Promise.resolve(res.data));


export default {
  listUsers
}