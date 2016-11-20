var mongoose = require('mongoose');
var User = require('../src/user');
var assert = require('assert');

describe('Creating new records in Database',()=>{
it('save a record',(done)=>{
  //first thing to do insertion accert library
  //create a new user ,save and then test
  //joe is a instance of user
  const joe = new User({name:"Ashish"});
  //insert new record in database and takes some amout of time
   //promise asssert and doa a xallback
  joe.save()
  .then(() => {
    //is ne wflag should be flase so that we know saved to database
    assert(!joe.isNew);
    done();
  })
});

})
