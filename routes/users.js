const fs = require('fs')
const path = require('path')
const express = require("express");
const router = express.Router();

const userData = fs.readFileSync(path.join(__dirname, '..', 'json', 'users.json'), {encoding: 'UTF8'})
const users = JSON.parse(userData)

router.get("/users", async (req, res) => {
  res.send(users);
});


module.exports = router;