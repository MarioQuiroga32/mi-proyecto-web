const alpha = require('alphavantage')({ key: '05L7SRSYPYET3MRU' });

alpha.data.daily(`csco`).then(data => {
  console.log(data);
});