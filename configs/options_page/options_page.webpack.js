const path=require("path");
const {merge}=require("webpack-merge");
const HtmlWebpackPlugin=require("html-webpack-plugin");

const client_basic_config=require("../webpack_basic/webpack.client_basic");

module.exports=merge(client_basic_config,{
  mode:"development",
  entry:path.resolve(process.cwd(),"./src/options_page/index.js"),
  output:{
    path:path.resolve(process.cwd(),"./build/options_page/"),
    filename:"[name].js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"options_page",
      filename:path.resolve(process.cwd(),"./build/options_page/index.html"),
      template:path.resolve(process.cwd(),"./src/options_page/index.html")
    })
  ]
});