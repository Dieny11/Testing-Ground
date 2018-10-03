import React from "react";
import { Paper} from '@material-ui/core';


export default props =>
  <Paper  >
    <ul style={{float: "left"}}>
      <a href="https://github.com/Dieny11"><img src={"/github.png"} style={{height: "70px", width: "70px"}}/> </a>
      <a href="www.linkedin.com/in/ella-vayrynen"><img src={"/linkedIN.png"} style={{height: "70px", width: "70px"}}/></a>
      <a href="https://twitter.com/ellvay97"><img src={"/twitter.png"} style={{height: "70px", width: "70px"}}/> </a>
    </ul>
  </Paper>
