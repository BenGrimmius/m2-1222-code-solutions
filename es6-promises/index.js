const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('Ben');

myPromise.then(
  message => {
    console.log(message);
  }
).catch(
  e => {
    console.error(e.message);
  }
);
