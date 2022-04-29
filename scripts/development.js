const webpack=require("webpack");
const {promisify}=require("util");

const background_config=require("../configs/background/background.webpack");
const popup_page_config=require("../configs/popup_page/popup_page.webpack");
const options_page_config=require("../configs/options_page/options_page.webpack");

(async ()=>{
  const popup_page_compiler=await promisify(webpack)(popup_page_config);
  console.log(popup_page_compiler.toString({colors:true}));
  const options_page_compiler=await promisify(webpack)(options_page_config);
  console.log(options_page_compiler.toString({colors:true}));
  const background_compiler=await promisify(webpack)(background_config);
  console.log(background_compiler.toString({colors:true}));
})();