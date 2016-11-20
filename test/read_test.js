//reading a data . Two category by name or id

var mongoose = require('mongoose');
var User = require('../src/user.js');
var assert = require('assert');

describe("Reading data from the database", () =>{

var newJoe
beforeEach((done)=>{
  newJoe = new User({name:"Joe"})
  newJoe.save()
        .then(()=>{
          done();
        })

})
  //crate a user
  //reading data by name Jpe
 it("Finds all user by name by joe",(done)=>{
   User.find({name : "Joe"})
        .then((user)=>{
          assert(users[0]._id.toString() === newJoe._id.toString())
          console.log(user);
          done();
        })
       })



  //reading data by name
  // it("Readign data by user id",(done)=>{
  //   User.findOne({ _id: newJoe._id})
  //   .then((user)=>{
  //     assert(user.name === "Joe")
  //     done();
  //   })
  // })










}))
