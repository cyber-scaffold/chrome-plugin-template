const express=require("express");
const webpack=require("webpack");
const {promisify}=require("util");
const webpack_dev_middleware=require("webpack-dev-middleware");
const webpack_hot_middleware=require("webpack-hot-middleware");

const background_config=require("../configs/background/background.webpack");
const popup_page_config=require("../configs/popup_page/popup_page.webpack");
const options_page_config=require("../configs/options_page/options_page.webpack");
const create_dev_manifest=require("./create_dev_manifest");

(async ()=>{
  await create_dev_manifest();
  const app=express();
  const popup_page_compiler=webpack(popup_page_config);
  app.use(webpack_dev_middleware(popup_page_compiler,{writeToDisk:true}));
  app.use(webpack_hot_middleware(popup_page_compiler,{reload:true}));
  // const popup_page_stats=await new Promise((resolve,reject)=>popup_page_compiler.watch({},(error,stats)=>error?reject(error):resolve(stats)));
  // console.log(popup_page_stats.toString({colors:true}));
  
  const options_page_compiler=webpack(options_page_config);
  app.use(webpack_dev_middleware(options_page_compiler,{writeToDisk:true}));
  app.use(webpack_hot_middleware(options_page_compiler,{reload:true}));
  // const options_page_stats=await new Promise((resolve,reject)=>options_page_compiler.watch({},(error,stats)=>error?reject(error):resolve(stats)));
  // console.log(options_page_stats.toString({colors:true}));
  
  const background_compiler=webpack(background_config);
  app.use(webpack_dev_middleware(background_compiler,{writeToDisk:true}));
  app.use(webpack_hot_middleware(background_compiler,{reload:true}));
  // const background_stats=await new Promise((resolve,reject)=>background_compiler.watch({},(error,stats)=>error?reject(error):resolve(stats)));
  // console.log(background_stats.toString({colors:true}));
  app.listen(8080,()=>console.log("dev server is running"));
})();