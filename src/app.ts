import AdminJS from "adminjs";
import mongoose from "mongoose";
import Chat from "./models/chat.model";
import Message from "./models/message.model";
import User from "./models/user.model";

import * as AdminJSMongoose from "@adminjs/mongoose";
import AdminJSExpress from "@adminjs/express";
import bcrypt from "bcryptjs";
const express = require("express");

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

mongoose.set("strictQuery", false);

const PORT = 3000;

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}

// const authenticate = async (email: string, password: string) => {
//   const user = await User.findOne({ email });

//   if (!user) {
//     throw new Error("Invalid email or password");
//   }

//   const passwordIsValid = await bcrypt.compare(password, user.password);

//   if (!passwordIsValid) {
//     throw new Error("Invalid email or password");
//   }

//   return Promise.resolve(user);
// };

const start = async () => {
  const app = express();

  await mongoose.connect(
    "mongodb+srv://franca:Gabriella12@cluster0.531ojj9.mongodb.net/?retryWrites=true&w=majority"
  );

  const adminOptions = {
    resources: [
      Chat,
      Message,
      User
    ],
  };

  const admin = new AdminJS(adminOptions);

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "AdminJS",
      cookiePassword: "hiddensecret",
    },
    null,
    {
      resave: true,
      saveUninitialized: true,
      secret: "Secret",
      name: "adminjs",
    }
  );

  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();

export default start;
