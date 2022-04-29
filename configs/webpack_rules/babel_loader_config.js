const path=require("path");

module.exports=[{
  test:/\.(js|jsx|ts|tsx)$/,
  exclude:/(node_modules)/,
  use:[{
    loader:"babel-loader",
    options:{
      configFile:path.join(process.cwd(),"./.babelrc.js")
    }
  }]
}];