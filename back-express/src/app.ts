import express from "express";
import userRoute from "./routes/userRoute";
// const express = require("express");
// const userRoute = require("./routes/userRoute");

const app = express();
app.use(express.json());

app.get("/help", () => {
  console.log("::: Someone pinged Here!!! :::");
});

//Routes
app.use("/meli/user", userRoute);

// module.exports = app;
export default app;
