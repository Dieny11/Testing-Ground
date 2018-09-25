import React from "react";
import {Paper, Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';


export default props =>
    <Paper >
      <Tabs>
      <Tab label="Item One" />
        <Tab label="Item Two" />
          <Tab label="Item Three" />
      </Tabs>
    </Paper>
