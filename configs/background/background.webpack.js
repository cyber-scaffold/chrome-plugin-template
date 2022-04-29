const path=require("path");
const {merge}=require("webpack-merge");
const NodePolyfillPlugin=require("node-polyfill-webpack-plugin");

const server_basic_config=require("../webpack_basic/webpack.server_basic");

module.exports=merge(server_basic_config,{
  mode:"development",
  entry:path.resolve(process.cwd(),"./src/background/index.js"),
  output:{
    path:path.resolve(process.cwd(),"./build/background/"),
    filename:"index.js"
  },
  resolve:{
    extensions:[".ts",".tsx",".js",".jsx"],
    alias:{
      "@@":process.cwd(),
      "@":path.resolve(process.cwd(),"./src/background/")
    }
  },
  plugins: [
		new NodePolyfillPlugin()
	]
});