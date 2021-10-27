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
import { useSelector } from 'react-redux';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CustomizedTimeline from '../elements/common/Timeline';
import ModelCard from '../elements/common/ModelCard';
import { FiCheck } from "react-icons/fi";
import {FaTwitter, FaDiscord} from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ReactPlayer from 'react-player'
import Music from '../elements/common/Music';
import VideoCrab from '../elements/common/VideoCrab';
import GoldenModel from '../elements/common/GoldenModel';
import PlaneModel from '../elements/common/PlaneModel';
import UpModel from '../elements/common/UpModel';
import GifsList from '../elements/common/GifsList';


const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Join the crew',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]
const PortfolioLanding = () => {

    let title = 'The Collection',   
        description = 'Raving Crabs is a collection of 10 000 UNIQUE NFT collectibles on the Ethereum Blockchain.\nEach NFT contains an animated 3D crab with its own characteristics and rarity. Owning crabs give you access to the club, our private space where the rave is permanent, as well as member-only benefits. \n Our main goal is to build a strong and engaged community who loves memes and music. ';

    const connected = useSelector((state) => state.metamask_connected)
    const chainID = useSelector((state) => state.chainID)
    const userAddress = useSelector((state) => state.address)

    const [open, setOpen] = React.useState(false);
    const [videoOpen, setVideoOpen] = React.useState(false);

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const claimCard = () => {
        console.log('claiming')
        if(connected && userAddress !== undefined && chainID === '0x1'){
            // mint the NFT
            console.log('should mint now')
        } else {
            handleDialogOpen()
        }
        
    }

    const displayClubAccess = () => {
        if(!connected || userAddress === undefined || chainID !== '0x1'){ // CHECKER ICI SI L'ADRESSE POSSEDE DES NFTS OU NON
            return <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <img src="/assets/images/portfolio/the_club.jpg" alt='crab rave club'/>
            <div style={{justifyContent:'center'}}>
                <h2 style={{color: 'red'}}>ACCESS DENIED</h2>
                <h4><b>Only members can enter The Club.</b></h4><p style={{color:'white'}}>1. Connect your Metamask wallet<br></br>2. Get at least 1 Raving Crab<br></br>3. Enter The Club<br></br>4. Rave.</p>
                {/* <button style={{marginTop : 10, width: 400, height: 60, fontSize: 20}} type="submit" className="rn-btn" onClick={claimCard}>Mint your Raving Crab</button> */}

            </div>
        </div>
        }
        else {
            return <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <img src="/assets/images/portfolio/the_club_opened.jpg" alt='crab rave club opened'/>
                <div style={{justifyContent:'center'}}>
                    <h2 style={{color: 'green'}}>ACCESS AUTHORIZED</h2>
                    <h4><b>Only members can enter The Club.</b></h4>
                    <a style={{marginTop: 10, fontSize: 20}} className="rn-btn" href="/the_club">Enter The Club</a>

                </div>
            </div>
            }
        }

    return (

        
        <div className="active-dark">
            <Music />
            <Helmet pageTitle="Raving Crabs NFT" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>
            {/* Start Slider Area   */}
            <div id="home" className="fix">
                <div className="slider-wrapper">
                    {/* Start Single Slide */}
                    {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">RAVING CRABS <br/>
                                            <TextLoop interval={2000}>
                                                <span> 6666 CRABS</span>
                                                <span> 4 SPECIES</span>
                                                <span> 4 GOLDEN</span>
                                                <span> 25 FACTIONS</span>
                                                <span> +15 DANCES</span>
                                                <span> 1 FESTIVAL</span>
                                                <span> MINT YOURS NOW</span>

                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>Enter The Club and RAVE</h2>
                                            {/* <button style={{marginTop : 10, width: 300, height: 80, fontSize: 27}} type="submit" className="rn-btn" onClick={claimCard}>Mint your crab</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Single Slide */}
                </div>
            </div>
            {/* End Slider Area   */} 

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"You are not connected to the Ethereum Network with Metamask"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please connect to Metamask. If you are already connected, be sure to select Ethereum Mainnet as network on the Metamask tab.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    </DialogActions>
                </Dialog>

           
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
                                        <h3 style={{fontSize: 30}}>More than just a NFT</h3>
                                        <ul className="list-style--1">
                                            <li style={{fontSize: 20}}><FiCheck /> A beautiful 3D Animated Model</li>
                                            <li style={{fontSize: 20}}><FiCheck /> Each crab is unique</li>
                                            <li style={{fontSize: 20}}><FiCheck /> Show your moves on the dancefloor</li>
                                            <li style={{fontSize: 20}}><FiCheck /> Rave with the community</li>
                                            <li style={{fontSize: 20}}><FiCheck /> Represent your faction</li>
                                        </ul>
                                    </div>
                                    <div className="mt--30">
                                        <h3 style={{fontSize: 30}}>Become a member</h3>
                                        <ul className="list-style--1">
                                            <li style={{fontSize: 20}}><FiCheck /> <b>Enter The Club</b> and RAVE</li>
                                            <li style={{fontSize: 20}}><FiCheck /> Earn exclusive <b>giveaways</b>*</li>
                                            <li style={{fontSize: 20}}><FiCheck /> Battle for your faction*</li>
                                            <li style={{fontSize: 20}}><FiCheck /> Get a <b>FREE Pixel Crab</b> NFT mint*<br></br><span style={{marginLeft: 25}}>(0.04 ETH value)</span></li>
                                        </ul>
                                    </div>
                                    <p style={{color: 'gray', fontSize: 11}}>*See Roadmap below</p>      
                                    <div className="mt--30">
                                        <h3 style={{fontSize: 30}}>Rave at our festival</h3>
                                        <ul className="list-style--1">
                                            <li style={{fontSize: 20}}><FiCheck /> Own a crab to get access to the <b>Raving Crab Festival</b></li>
                                            <li style={{fontSize: 20}}><FiCheck /> An online event <b>ONLY FOR THE COMMUNITY</b></li>
                                            <li style={{fontSize: 20}}><FiCheck /> 2 stages, 1 message : <b>RAVE</b></li>
                                        </ul>
                                    </div>                             
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail position-relative" style={{marginTop: -100}}>
                                        <div className="dshow" ><PlaneModel /></div>
                                        <div className="dshow" style={{marginTop: -115}} ><UpModel/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* End About Area  */}


            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div style={{height: 350}}>
                                        {/* <ModelCard url="/C1_golden.glb" dance={3} intensity={0.7}/> */}
                                        <GoldenModel />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 style={{fontSize: 35}}>You know how clubs work...</h2>
                                            <h3 className="title" style={{color:'gray', fontSize: 25}}>The earlier you get in, the less you pay !</h3>
                                            <p className="description">Grab one of the first 2222 Raving Crabs for only 0.06 ETH instead of 0.07 ETH !</p>
                                            <br></br>
                                            <h5 style={{fontSize: 20}}>2222 Crabs left @0.06Ξ</h5>

                                            <ProgressBar striped variant="danger" now={0} />
                                        </div>
                                        
                                        {/* <button style={{marginTop : 40, width: 400, height: 60, fontSize: 20}} type="submit" className="rn-btn" onClick={claimCard}>Mint your Raving Crab</button> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         

   

            <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <span>JOIN THE CLUB</span>
                                <h2>LET THE RAVE BEGIN</h2>
                                <button disabled="true" className="rn-button-style--2" href="/contact"><span>Mint your raving crab</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
           
            

             {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        {/* <div style={{height: 300}}>
                                            <ModelCard url="/5052.glb" dance={4} intensity={0.3}/>
                                        </div>
                                        <div style={{height: 300, marginTop: -75}}>
                                            <ModelCard url="/4078.glb" dance={4} intensity={0.3}/>
                                        </div> */}
                                        <div style={{width: '100%', border: "4px solid rgba(85,85,85)"}}>
                                            {/* <VideoCrab /> */}
                                            <GifsList />
                                        </div>
                                        {/* <img className="w-100" src="/assets/images/about/crabs.png" alt="About Images"/> */}
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabTwo tabStyle="tab-style--1" />
                                        </div>
                                        {/* <button style={{marginTop : 15}} type="submit" className="rn-btn" onClick={claimCard}>Mint your crab</button> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            {/* End About Area */}
           
            

       

            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                        <h2 className="title">The Very Private Club</h2>
                                        <p>Members only.</p>
                                    </div>
                                </div>
                            </div>
                            {displayClubAccess()}
                            
                            {/* <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="7" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 mt_sm--30 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/blog"><span>View More</span></a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio Area */}

            <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <h2>JOIN THE COMMUNITY</h2>
                                <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                                    <a target='_blank' href='https://discord.gg/mc4ycfredU' style={{marginRight: 10}} className="rn-button-style--2"><span><FaDiscord /> Discord</span></a>
                                    <a target='_blank' href='https://twitter.com/ravingcrabs' style={{marginLeft: 10}} className="rn-button-style--2"><span><FaTwitter /> Twitter</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                        {/* Start Service Area  */}
                        <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">Roadmap</h2>

                                    <CustomizedTimeline />
                                    
                                </div>
                            </div>
                        </div>
                        {/* <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div> */}
                    </div>
                </div>  
            </div>
            {/* End Service Area  */} 

            <FooterTwo />
            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}
            
        </div>
    )
}

export default PortfolioLanding;
