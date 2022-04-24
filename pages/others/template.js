const express = require('express');
const router = express.Router();
const enabledPage = false;
const statusManager = require("../handlers/statusManager");
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get("/", (req, res) => {
  var statusManagerInstance0 = new statusManager(res, 200);
  statusManagerInstance0.handleStatus()
  res.send("Template");
});

module.exports = [router, enabledPage];