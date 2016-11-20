var mongoose = require('mongoose');

var dburl = "mongodb://localhost/user_test";
mongoose.connect(dburl);

mongoose.connection
        .once('open',()=>console.log("Good to go"))
        .on('error',(error) =>{
          console.log('Warning',error);
        })
