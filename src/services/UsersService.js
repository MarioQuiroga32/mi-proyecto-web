import http from './BaseService';

const listUsers = (users) => http.get('/users', users)
  .then(res => res.data);

const follow = (id) => http.post(`/users/${id}/follow`)
  .then(res => res.data)


export default {
  listUsers, 
  follow
}