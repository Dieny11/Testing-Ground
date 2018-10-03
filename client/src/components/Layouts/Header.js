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
          <Tab label="Home Page" href="/"/>
          <Tab label="Stream" href="/stream"/>
          <Tab label="Portfolio" href="/portfolio"/>
        </Tabs></div>
    </Toolbar>
  </AppBar>
