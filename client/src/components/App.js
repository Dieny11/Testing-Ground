import React, { Component, Fragment } from "react"
import Header from "./Layouts/Header"
import Footer from "./Layouts/Footer"
import Articles from "./Articles"



export default class extends Component {
    render() {
        //Fragment is an outer wrapper instead of having a div.
        return <Fragment>
            <Header />
            <Articles />
            <Footer />

        </Fragment>
    }
}