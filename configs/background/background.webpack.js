const path=require("path");
const {merge}=require("webpack-merge");
const NodePolyfillPlugin=require("node-polyfill-webpack-plugin");

const server_basic_config=require("../webpack_basic/webpack.server_basic");

module.exports=merge(server_basic_config,{
  mode:"development",
  entry:path.resolve(process.cwd(),"./src/background.js"),
  output:{
    path:path.resolve(process.cwd(),"./build/"),
    filename:"background.js"
  },
  plugins: [
		new NodePolyfillPlugin()
	]
});