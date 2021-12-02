// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('.172.77', (error, data) => {
  if (error) {
    console.error('It didn\'t work!!!', error);
    return;
  }

  console.log(`{ latitude: '${data.latitude}'', longitude: ${data.longitude} }`);
});