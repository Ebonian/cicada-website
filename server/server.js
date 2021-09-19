// importing
import express from "express";
import mongoose from "mongoose";
import Contents from "./dbText.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// database config
const URI =
  "mongodb+srv://admin:rqQvqyleSYV4NfqP@cluster0.rxlir.mongodb.net/cicadadb?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//

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
