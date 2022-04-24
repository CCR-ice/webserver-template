const express = require('express')
const router = express.Router()
const statusManager = require("./handlers/statusManager");
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

router.get("/", (req, res) => {
  var statusManagerInstance0 = new statusManager(res, 200);
  statusManagerInstance0.handleStatus()  
  res.send("Main")
});

router.get("*", (req, res) => {
  var statusManagerInstance0 = new statusManager(res, 404);
  statusManagerInstance0.handleStatus()
});
module.exports = router