import React, {Suspense} from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CustomizedTimeline from '../elements/common/Timeline';
import ModelCard from '../elements/common/ModelCard';
import { FiCheck } from "react-icons/fi";
import {FaTwitter, FaDiscord} from 'react-icons/fa';
import {AiOutlinePlayCircle} from 'react-icons/ai'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { propTypes } from 'react-bootstrap/esm/Image';
import error404 from '../elements/error404';
import {useLocation} from 'react-router-dom'
import Chip from '@mui/material/Chip';
import contract_address from '../elements/contract_address';
import Footer from "../component/footer/FooterTwo";

const Web3 = require('web3');
const BN = require('bn.js');


const ModelDetailed = (props) => {



    const returnDance = (dance) => {
      switch (dance){
        case "Hey-Ho":
        case "Left/Right":
        case "Dab":
        case "Drum Roll":
          return 1;
        case "Plane":
        case "Pump it":
        case "Front/Back":
          return 2;
        case "Jubilation":
        case "Disco":
        case "Hype":
        case "Twist":
          return 3;
        case "Wavy clap":
        case "Wave":
        case "Clap-Clap":
        case "Overhyped":
          return 4;
        case "Get low":
          return 5;
        default:
          return 1;
      }
    }
    let location = useLocation();


    const displayPage = () => {
      if(location.aboutProps === undefined){
        return <>
                    <Helmet pageTitle="The Club" />

        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Page Error  */}
            <div className="error-page-inner bg_color--4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h1 className="title theme-gradient">404!</h1>
                                <h3 className="sub-title">Page not found</h3>
                                <span>The page you were looking for could not be found.</span>
                                <div className="error-button">
                                    <a className="rn-button-style--2 btn-solid" href="/">Back To Homepage</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Page Error  */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
            <Footer /> 
        </>
      } else {

        console.log(location.aboutProps)
        console.log(location.aboutProps.token)
        return <div className="active-dark">
            
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
        
            {/* Start About Area  */}
            <div className="rn-about-area ptb--120 bg_color--1">
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    {/* <h3 className="title">More than just a NFT</h3> */}
                                    {/* <p className="description">More than just a NFT</p> */}
                                </div>
                                <div className="mt--30"> 
                                    <div style={{display: 'flex'}}><h3 style={{fontSize: 70}}>{location.aboutProps.token.name}</h3><a href={location.aboutProps.token.animation_url}><img style={{height: 25, marginTop: 35, marginLeft: 30}} src="/assets/images/download.png" alt="download icon"/></a></div>
                                    <p style={{fontStyle:"italic", fontSize: 22, color:"gray", marginTop: -16}}>DNA : {location.aboutProps.token.dna}</p>
                                    {/* <p style={{fontStyle:"italic", fontSize: 17, color:"#f8004c", marginTop: -10}}>Rarity : 99%</p> */}

                                    <div style={{marginTop: 30}}>
                                        {location.aboutProps.token.properties.map((att =>  
                                            <Chip style={{height: 60, paddingLeft: 7, paddingRight: 7, marginLeft: 5, marginRight : 5, marginTop: 5, marginBottom: 5}} 
                                            key = {att.trait_type}
                                            label = {(
                                                <section>
                                                <div style={{ marginTop: 3, color: '#f8004c', fontStyle:'italic', fontSize:15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '20rem'}}> {att.trait_type}</div>
                                                <div style={{ marginTop: -8.5, color:'rgba(160,160,160,1)', fontSize: 20, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '25rem'}}> {att.value}</div>
                                                </section>
                                            )}
                                            variant="outlined" />
                                        ))}
                                    </div>
                                    <div style={{display: 'flex'}}><a style={{marginTop: 50}} target="_blank" href={`https://opensea.io/assets/${contract_address.contract_address}/${location.aboutProps.token.name.substring(1)}`}>
                                    <h4>View on Opensea </h4></a><a style={{marginTop: 50}} target="_blank" href={`https://opensea.io/assets/${contract_address.contract_address}/${location.aboutProps.token.name.substring(1)}`}><img style={{height: 40, marginLeft: 20, marginTop: -5}} src='/assets/images/opensea.png' alt="opensea"/></a></div>
                                
                                    <a style={{marginTop: 100}} target="_blank" href={`https://twitter.com/share?text=Just got my new Raving Crab NFT ! Check it out ! @ravingcrabs \n&url=https://opensea.io/assets/${contract_address.contract_address}/${location.aboutProps.token.name.substring(1)}`} className="rn-btn">Share on Twitter</a>
                                </div>             
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail position-relative">
                                    <div className="dshow" ><ModelCard url = {location.aboutProps.token.animation_url} dance={returnDance(location.aboutProps.token.properties[4].value)}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* End About Area  */}

        {/* Start Back To Top */}
        <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            <Footer /> 

    </div>
      }
    }

    return (
      displayPage()
    )
}

export default ModelDetailed;
