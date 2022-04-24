const express = require("express");
const app = express();

async function loadURLS(){
  
  var { promises } = require("fs");
  const files = await promises.readdir("./pages/others");
  for (var i = 0; i < files.length; i++){
    var pageName = files[i].slice(0, -3).toLowerCase();
    var fileName = files[i];
    if (require(`./pages/others/${fileName}`)[1]){
      app.use(`/${pageName}`, require(`./pages/others/${fileName}`)[0]);
    }
  }
  app.use("/", require("./pages/main.js"))
}
async function loadStatusURLS(){
  var { promises } = require("fs");
  const files = await promises.readdir("./pages/statusCodes");
  for (var i = 0; i < files.length; i++){
    var pageName = files[i].slice(0, -3).toLowerCase();
    var fileName = files[i];
    if (require(`./pages/statusCodes/${fileName}`)[1]){
      app.use(`/${pageName}`, require(`./pages/statusCodes/${fileName}`)[0]);
    }
  }
}
loadStatusURLS();
loadURLS();

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
