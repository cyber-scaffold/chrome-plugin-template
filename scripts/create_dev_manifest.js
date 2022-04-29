const path=require("path");
const {readFile,writeFile}=require("jsonfile");

const manifest_file_path=path.resolve(process.cwd(),"./build/manifest.json");
const package_json_path=path.resolve(process.cwd(),"./package.json");


module.exports=async function create_dev_manifest(){
  const {version}=await readFile(package_json_path);
  const manifest_content={
    version,
    name:"起步示例",
    manifest_version:3,
    action:{
      "default_title":"起步示例",
      "default_popup":"./popup_page/index.html"
    },
    permissions:[],
    options_page:"./options_page/index.html",
    background:{
      service_worker:"./background/index.js"
    }
  };
  await writeFile(manifest_file_path,manifest_content,{spaces:2,EOL:"\r\n"});
};