import React from "react";
import {Space,Button} from "antd";
import ReactDOM from "react-dom";

const render_target=document.getElementById("root");

ReactDOM.render((
  <div style={{padding:10}}>
    <Space direction="vertical">
      <div>测试插件</div>
      <Button type="primary">click me</Button>
      <Button type="primary">click me</Button>
    </Space>
  </div>
),render_target);
