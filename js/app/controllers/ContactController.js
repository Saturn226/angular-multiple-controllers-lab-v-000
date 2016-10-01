
function ContactController(){
  this.name = "Ashley"
  this.email = "Ashley@mail.com"
  this.phone = "555-555-5555"

  var vm = this;

  this.changeName = function(){
    vm.name = "Bob"
  }
};
angular
.module('app')
.controller('ContactController', ContactController)