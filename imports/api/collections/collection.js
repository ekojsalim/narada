import {Mongo} from "meteor/mongo";
import {Class} from "meteor/jagi:astronomy";

const Houses = new Mongo.Collection("houses");

const Transaction = Class.create({
  name: "Transaction",
  fields: {
    pointChange: Number,
    authorizer: String
  },
  behaviors: ["timestamp"]
})

const Student = Class.create({
  name: "Student",
  fields: {
    id: {
      type: String,
      default: Random.id()
    },
    name: String,
    points: {
      default: 0,
      type: Number
    },
    transactions: {
      default() {
        return [];
      },
      type: [Transaction]
    }
  }
});

export const House = Class.create({
  name: "House",
  collection: Houses,
  fields: {
    name: String,
    students: {
      type: [Student],
      default() {
        return [];
      }
    },
    points: {
      type: Number,
      default: 0
    }
    }
});

Meteor.methods({
  redeem(studentId, point) {
    point(studentId, (-point));
  },
  point(studentId, point) {
    let y = House.findOne({"students.id": studentId});
    y.points += point
    y.transactions.push({pointChange: (point), authorizer: Meteor.userId()})
  },
  add(query1) {
    House.insert(query1);
  }
});
