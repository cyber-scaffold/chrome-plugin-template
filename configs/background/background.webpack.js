const path=require("path");

module.exports={
  mode:"development",
  entry:path.resolve(process.cwd(),"./src/background.js"),
  output:{
    path:path.resolve(process.cwd(),"./build/"),
    filename:"background.js"
  },
  target:"node-webkit",
};