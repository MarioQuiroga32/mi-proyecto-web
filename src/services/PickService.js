import http from './BaseService';

const createPick = (pick) => http.post('/picks', pick)
  .then(res => Promise.resolve(res.data));

const listPicks = () => http.get('/picks')
  .then(res => Promise.resolve(res.data));

const listFollowingPicks = () => http.get('/picks/following')
  .then(res => Promise.resolve(res.data));

const getPick = () => http.get('/picks/:id')
  .then(res => Promise.resolve(res.data));

export default {
  createPick,
  listPicks,
  listFollowingPicks,
  getPick
}