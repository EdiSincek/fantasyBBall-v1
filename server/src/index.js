const fs = require("fs");
const yahoo = require("./yahooFantasyBasketball");
const handleResponse = require("./responseHandlingFunctions");
const express = require("express");
const path = require('path');
const cors = require('cors');


const PORT = 3001;

const app = express();

app.use(cors());



app.get("/api", async (req, res) => {
  const data = await test();
  res.send(data)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


const test = async () => {
  await yahoo.yfbb.readCredentials();
  const data = await yahoo.yfbb.getRoster(8)
  return data

}
test();