import "./houses.html";

Template.houses.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe("houses");
  });
});
