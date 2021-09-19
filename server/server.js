// importing
import express from "express";
import mongoose from "mongoose";
import Contents from "./dbContent.js";
import Pusher from "pusher";
import "dotenv/config";
// const express = require("express");
// const mongoose = require("mongoose");
// const Contents = require("./dbText");
// const Pusher = require("pusher");

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1269344",
  key: "a1d6960ce79732d6b02f",
  secret: "ac22380fe63c9c1fcab8",
  cluster: "ap1",
  useTLS: true,
});

// middleware
app.use(express.json());

app.use((req, res, next) => {
  // set a header
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// database config
const URI = process.env.URI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // make it realtime
db.once("open", () => {
  console.log("Database Connected");

  const contentCollection = db.collection("contents");
  const changeStream = contentCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        content: messageDetails.content,
        name: messageDetails.name,
      });
    }
  });
});

// api route
app.get("/", (req, res) => res.status(200).send("Hello, World!"));

app.get("/contents/sync", (req, res) => {
  Contents.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/contents/new", (req, res) => {
  const dbMessage = req.body;

  Contents.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
