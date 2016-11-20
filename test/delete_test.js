//REMOVE , findOneAndRemove and findByIdAnd Remove

var mongoose = require('mongoose');
var assert = require('assert');
var User = require('../src/user');

describe("Remving User from Database",()=>{
  //creating a user

  var newJoe
  beforeEach((done)=>{
    newJoe = new User({name:"Joe"})
    newJoe.save()
          .then(()=>{
            done();
          })
  })




  // it("model based removal",(done)=>{
  //   // joe.remove()
  //   // .then(()=>{ User.findOne(name:'Joe')})
  //   // .then((user)=>{
  //   //   assert(user === null);
  //   //   done();
  //   //
  //   // })
  // })

  //
  // it("Class based Removal",()=>{
  //
  //
  //
  //
  //
  //
  //
  //
  // })




















});
