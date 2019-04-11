import http from './BaseService';

const createPick = (pick) => http.post('/picks', pick)
  .then(res => Promise.resolve(res.data));

const listPicks = () => http.get('/picks')
  .then(res => Promise.resolve(res.data));

const listFollowingPicks = () => http.get('/picks/following')
  .then(res => res.data)

  const listUserPicks = (userId) => http.get(`/picks/${userId}`)
  .then(res => res.data)


const getPick = (picks) => http.get('/picks/:id', picks)
  .then(res => Promise.resolve(res.data));

export default {
  createPick,
  listPicks,
  listFollowingPicks,
  listUserPicks,
  getPick
}



