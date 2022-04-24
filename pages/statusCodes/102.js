const express = require('express');
const router = express.Router();
const enabledStatusCode = false;
const code = 102;
const message = "Processing";

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get("/", (req, res) => {
  res.write("<!DOCTYPE html>\n");
  res.write("<html>\n");
  res.write("\t<head>\n");
  res.write(`\t\t<title>${code}</title>\n`);
  res.write("\t</head>\n");
  res.write("\t<body>\n");
  res.write(`\t\t<h1>${code}</h1>\n`);
  res.write(`\t\t<span>${message}</span>\n`);
  res.write("\t</body>\n");
  res.end("</html>")
});

module.exports = [router, enabledStatusCode]