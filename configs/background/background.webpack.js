const path=require("path");
const NodePolyfillPlugin=require("node-polyfill-webpack-plugin");

module.exports={
  mode:"production",
  entry:path.resolve(process.cwd(),"./src/background.js"),
  output:{
    path:path.resolve(process.cwd(),"./build/"),
    filename:"background.js"
  },
  plugins: [
		new NodePolyfillPlugin()
	]
};