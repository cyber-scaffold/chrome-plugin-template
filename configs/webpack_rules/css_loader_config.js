const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports=[{
  test:/\.(css)$/,
  use:[{
    loader:MiniCssExtractPlugin.loader,
  },{
    loader:"css-loader",
    options: {
      modules:{
        mode:(resourcePath)=>{
          if(/\.(global)/.test(resourcePath)){
            return "global";
          }
          if(/(node_modules)/.test(resourcePath)){
            return "global";
          };
          return "local";
        }
      },
      sourceMap:true
    }
  },{
    loader:"postcss-loader",
    options:{
      postcssOptions:{
        config:true
      },
      sourceMap:true
    }
  }]
}]