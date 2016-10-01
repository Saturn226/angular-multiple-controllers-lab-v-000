
function StaffController(){
  this.name = "Cynthia"
  this.email = "Cynthis@mail.com"
  this.phone = "551-555-5555"
};
angular
.module('app')
.controller('StaffController', StaffController)