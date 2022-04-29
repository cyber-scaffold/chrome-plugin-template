
const babel_loader_config=require("../webpack_rules/babel_loader_config");
const css_loader_config=require("../webpack_rules/css_loader_config");
const less_loader_config=require("../webpack_rules/less_loader_config");
const scss_loader_config=require("../webpack_rules/scss_loader_config");
const html_loader_config=require("../webpack_rules/html_loader_config");
const file_loader_config=require("../webpack_rules/file_loader_config");

module.exports={
  module:{
    rules:[
      ...babel_loader_config,
      ...css_loader_config,
      ...less_loader_config,
      ...scss_loader_config,
      ...file_loader_config,
      ...html_loader_config
    ]
  }
};