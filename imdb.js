// const Client = require('pg').Client;
const superagent = require('superagent');
//
// const client = new Client({
//   database: 'mmdb'
// });
//
// client.connect();
//
// let lastRequestTime = +new Date();
// let titleId = 1;
//
// while (true) {
//   if (+new Date() - lastRequestTime < 500) continue;
//
// }
//
// function request(id) {
//   const tt = fillLeadingZeroes(id);
//   return superagent.get(`https://www.imdb.com/title/tt${tt}/`).then(res => {
//
//   });
// }
//
// function fillLeadingZeroes(n) {
//   const l = String(n).length;
//   const numZeroes = 7 - l;
//   const buffer = [];
//
//   for (let i = 0; i < numZeroes; i++) {
//     buffer.push(0);
//   }
//
//   buffer.push(n);
//   return buffer.join('');
// }

superagent.get('https://www.imdb.com/title/tt5989218/').then(res => {
  console.log(res.text.match(/<title>.*<\/title>/)[0]);
})
