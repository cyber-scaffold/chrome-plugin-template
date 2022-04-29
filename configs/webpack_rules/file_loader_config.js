

module.exports=[{
  test:/\.(png|jpg|jpeg|gif|mp4|avi|svg|ttf|eot|otf|fon|ttc|woff|woff2)$/,
  use:[{
    loader:"file-loader",
    options:{
      outputPath:"assets",
      publicPath:"/assets/",
      name:`[name][contenthash].[ext]`
    }
  }]
}]