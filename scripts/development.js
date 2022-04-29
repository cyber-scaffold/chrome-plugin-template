// const path=require("path");
const webpack=require("webpack");
const {promisify}=require("util");

const popup_page_config=require("../configs/popup_page/popup_page.webpack");
const options_page_config=require("../configs/options_page/options_page.webpack");


(async ()=>{
  const popup_page_compiler=await promisify(webpack)(popup_page_config);
  console.log(popup_page_compiler.toString({colors:true}));
  const options_page_compiler=await promisify(webpack)(options_page_config);
  console.log(options_page_compiler.toString({colors:true}));
  // await new Promise((resolve,reject)=>popup_page_compiler.watch({},(error,stats)=>error?reject(error):resolve(stats)));
  // await new Promise((resolve,reject)=>options_page_compiler.watch({},(error,stats)=>error?reject(error):resolve(stats)));
})();