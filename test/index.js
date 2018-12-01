var Mta = require("../index");

var mta = new Mta({
  key: process.env.KEY,
  feed_id: 1
});

mta.stop().then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.log(err);
  });