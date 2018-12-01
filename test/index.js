var Mta = require("../index");

var mta = new Mta();

mta.stop().then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.log(err);
  });