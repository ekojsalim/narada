import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";
import { AccountsTemplates } from "meteor/useraccounts:core";

import "../../ui/layout/mainLayout.js";
import "../../ui/layout/houses.js";

FlowRouter.route("/", {
  name: "home",
  action() {
    BlazeLayout.render("mainLayout", {main: "houses"})
  }
})

AccountsTemplates.configureRoute("signIn", {
  name : "signin",
  path : "/signin"
});

FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);
