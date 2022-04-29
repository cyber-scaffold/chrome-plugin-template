const path=require("path");
const {merge}=require("webpack-merge");
const HtmlWebpackPlugin=require("html-webpack-plugin");

const client_basic_config=require("../webpack_basic/webpack.client_basic");

module.exports=merge(client_basic_config,{
  mode:"development",
  entry:path.resolve(process.cwd(),"./src/popup_page/index.js"),
  output:{
    path:path.resolve(process.cwd(),"./build/popup_page/"),
    filename:"index.js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:"popup_page",
      filename:path.resolve(process.cwd(),"./build/popup_page/index.html"),
      template:path.resolve(process.cwd(),"./src/popup_page/index.html")
    })
  ]
});