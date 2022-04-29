

module.exports=[{
  test:/\.html$/,
  use:[{
    loader:"html-loader",
    options:{esModule:false,sources:false}
  }]
}];