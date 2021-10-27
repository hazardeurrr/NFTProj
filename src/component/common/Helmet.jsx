import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || 6666 3D Animated NFTs </title>
                    <meta name="description" content="Raving Crabs NFT is a collection of 6666 unique 3D Animated Models of Crabs dancing. Get your Raving Crab to become a member, enter The Club and Rave." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
