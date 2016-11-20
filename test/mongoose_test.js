var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var dburl = "mongodb://localhost/user_test";
mongoose.connect(dburl);
//before one executed once not evertime
before((done) =>{
  mongoose.connection
          .once('open',() =>{
            done();
          })
          .on('error',(error) => {
            console.log('Warning',error);
          });
})

//add a hook to execute before any test methid
beforeEach((done) => {
  //empty our database  and drop all the data..Pause mocha before running any test Takes time to run it.
  //asychrmous in nature so it takes some amout of time
  //Done method
  mongoose.connection.collections.users.drop(()=>{
    //ready to run the next test
    //done callback
    done();
  });
})
