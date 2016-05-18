import "./houses.html";
import {House} from "/imports/api/collections/collection.js"
Template.houses.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("houses");
  });
});

Template.houses.helpers({
  houses() {
    return House.find({});
  }
})
