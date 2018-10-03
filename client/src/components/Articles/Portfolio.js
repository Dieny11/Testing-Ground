import React from "react"
import {Grid } from '@material-ui/core';
import TwitterPane from "./TwitterPane"


const styles={
    Paper: {padding: 20, marginTop: 10, marginBottom: 10, textAlign: "center"}
}


export default props =>
    <Grid container>
        <Grid item sm>
          I AM AN PORTFOLIOOOO
        </Grid>
        <Grid item sm="2">
        <TwitterPane styles={styles}/>
        </Grid>
       
    </Grid>
