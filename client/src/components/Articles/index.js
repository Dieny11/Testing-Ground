import React from "react"
import {Grid } from '@material-ui/core';
import LeftPane from "./LeftPane"
import TwitterPane from "./TwitterPane"
//import Twitter from  '../Layouts/Twitter'



const styles={
    Paper: {padding: 20, marginTop: 10, marginBottom: 10, textAlign: "center"}
}


export default props =>
    <Grid container>
        <Grid item sm>
           <LeftPane styles={styles}/>
        </Grid>
        <Grid item sm="2">
        <TwitterPane styles={styles}/>
        </Grid>
       
    </Grid>
