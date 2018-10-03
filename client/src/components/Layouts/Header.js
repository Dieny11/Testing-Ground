import React from "react"
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

export default props =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" >
        Diemundo's Page
</Typography>
      <div style={{ right: 0, position: " absolute" }}>
        <Tabs centered>
          <Tab label="Home Page" />
          <Tab label="Stream" />
          <Tab label="Me and coding" />
        </Tabs></div>
    </Toolbar>
  </AppBar>
