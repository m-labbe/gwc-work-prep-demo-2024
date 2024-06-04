const fs = require('fs')
const path = require('path')
const express = require("express");
const router = express.Router();

const userData = fs.readFileSync(path.join(__dirname, '..', 'json', 'users.json'), {encoding: 'UTF8'})
const users = JSON.parse(userData)

router.get("/users", async (req, res) => {
  res.send(users);
});

router.get("/users/:id", async (req, res) => 
  {
    const userid = parseInt(req.params.id);
    if(isNaN(userid)) {
      res.send({"error": "Specified User not found"});
    }
    var user = users.find(item => item.id === userid);
    res.send(user);
  })


module.exports = router;