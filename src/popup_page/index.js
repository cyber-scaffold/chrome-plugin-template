import React from "react";
import ReactDOM from "react-dom";

const render_target=document.getElementById("root");

ReactDOM.render((
  <div>
    <div>asdadas</div>
    <div>asdadas</div>
  </div>
),render_target);


if(process.env.NODE_ENV==="development"){
  if(module.hot){
    module.hot.accept();
    module.hot.dispose(function () {
      console.log("module.hot.dispose");
    });
  }
}