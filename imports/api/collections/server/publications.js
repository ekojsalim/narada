import {Meteor} from "meteor/meteor";
import {House} from "../collection.js";

Meteor.publish("houses", function() {
  return House.find({});
});

Meteor.publish("students", function(houseName) {
  return House.find({name: houseName}, {
    fields: {students: 1}
  })
});

Meteor.publish("student", function(studentId) {
  return House.find({}, {students: {
    $elemMatch: {
      id: studentId
    }
  }});
});
