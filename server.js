const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const db = require("./database/helpers.js");
const enhancer = require("./enhancing/enhancer.js");

const server = express();
server.use(helmet(), cors(), express.json());

server.get("/item/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const item = await db.getItem(id);
    res.status(200).json(enhancer.get(item));
    console.log(item);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error retrieving item" });
  }
});

server.get("/", (req, res) => {
  res.status(200).json("I live!");
});

module.exports = server;
