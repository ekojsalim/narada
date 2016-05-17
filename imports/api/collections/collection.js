import {Mongo} from "meteor/mongo";
import {Class} from "meteor/jagi:astronomy";

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
    id: Mongo.ObjectID,
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
  collection: new Mongo.Collection("houses"),
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
