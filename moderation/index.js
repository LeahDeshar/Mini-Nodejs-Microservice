const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const axios = require("axios");
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        content: data.content,
        postId: data.postId,
        status,
      },
    });
  }
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
