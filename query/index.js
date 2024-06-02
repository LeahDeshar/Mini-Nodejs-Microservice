const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

app.get("/posts", (req, res) => {});

app.post("/events", async (req, res) => {});

app.listen(4002, () => {
  console.log("Listening on 4002");
});
