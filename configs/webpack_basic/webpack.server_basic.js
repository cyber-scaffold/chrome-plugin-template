
const babel_loader_config=require("../webpack_rules/babel_loader_config");

module.exports={
  /**
   * 为了防止报eval的问题才使用cheap-module-source-map
   * @see https://stackoverflow.com/questions/48047150/chrome-extension-compiled-by-webpack-throws-unsafe-eval-error
   * **/
  devtool:"cheap-module-source-map",
  module:{
    rules:[
      ...babel_loader_config
    ]
  }
};