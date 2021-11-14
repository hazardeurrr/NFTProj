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
import {AiOutlinePlayCircle} from 'react-icons/ai'
import ProgressBar from 'react-bootstrap/ProgressBar'
import ReactPlayer from 'react-player'
import Music from '../elements/common/Music';
import VideoCrab from '../elements/common/VideoCrab';
import GoldenModel from '../elements/common/GoldenModel';
import PlaneModel from '../elements/common/PlaneModel';
import UpModel from '../elements/common/UpModel';
import GifsList from '../elements/common/GifsList';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { convertNeSwToNwSe } from 'google-map-react';
const Web3 = require('web3');
const BN = require('bn.js');

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

    const [count, setCount] = React.useState(1);

    const incrementCount = () => {
        let c = count + 1;
        if(c > 0 && c <= 20)
            setCount(c);
    }
    
    const decrementCount = () => {
        let c = count - 1;
        if(c > 0 && c <= 20)
            setCount(c);
    }
  

    let title = 'The Collection',   
        description = 'Raving Crabs is a collection of 6666 UNIQUE NFT collectibles on the Ethereum Blockchain.\nEach NFT contains an animated 3D crab with its own characteristics and rarity. Owning crabs give you access to the club, our private space where the rave is permanent, as well as member-only benefits. \n Our main goal is to build a strong and engaged community who loves memes and music. ';

    const connected = useSelector((state) => state.metamask_connected)
    const chainID = useSelector((state) => state.chainID)
    const userAddress = useSelector((state) => state.address)
    const web3 = useSelector((state) => state.web3Instance)
    const contract = useSelector((state) => state.contractInstance)
    const totalMinted = useSelector((state) => state.totalMinted)

    const [open, setOpen] = React.useState(false);
    const [videoOpen, setVideoOpen] = React.useState(false);

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function claimCard(){
        if(connected && userAddress !== undefined && chainID === '0x4'){    // CHANGE THAT TO 0x1 FOR PRODUCTION !
            // mint the NFT
            if(contract === undefined){
                console.log("Error : the contract has not been found yet")
            }
            else {
                let baseearly = new BN('60000000000000000')
                let baselate = new BN('70000000000000000')
                let finalval = baseearly
                if(parseInt(totalMinted) + parseInt(count) <= 2222){
                    finalval = baseearly.mul(new BN(count.toString()))
                } else if(totalMinted > 2222) {
                    finalval = baselate.mul(new BN(count.toString()))
                } else {    // totalMinted + count > 2222 && totalMinted < 2222
                    let nbr6 = 2222-parseInt(totalMinted)
                    let nbr7 = parseInt(count) - nbr6
                    finalval = baseearly.mul(new BN(nbr6.toString())).add(baselate.mul(new BN(nbr7.toString())))

                }

                contract.methods.mint(count).send({from : userAddress, value: finalval})
                .on('transactionHash', function(hash){
                    console.log("hash :" + hash)
                    // this.setState({token: {txHash: hash}})
                  })
                  .on('confirmation', function(confirmationNumber, receipt) {
                    // this.setState({token: {confirmationNumber: confirmationNumber}})
                    console.Log("confirmation number : " + confirmationNumber)
                  })
                  .on('receipt', function(receipt){
                      console.log("receipt : " + receipt)
                  })
            }
            
        } else {
            handleDialogOpen()
        }
    }

    const displayClubAccessPrevious = () => {
        return <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <img src="/assets/images/portfolio/the_club.jpg" alt='crab rave club'/>
            <div style={{justifyContent:'center'}}>
                <h2 style={{color: 'red'}}>ACCESS DENIED</h2>
                <h4><b>Only members can enter The Club.</b></h4><p style={{color:'white'}}>1. Connect your Metamask wallet<br></br>2. Get at least 1 Raving Crab<br></br>3. Enter The Club<br></br>4. Rave.</p>
                {/* <button style={{marginTop : 10, width: 400, height: 60, fontSize: 20}} type="submit" className="rn-btn" onClick={claimCard}>Mint your Raving Crab</button> */}

            </div>
        </div>
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


    const displayMintsLeft = () => {
        if(totalMinted < 2202){
            return <div>
                <h2 style={{fontSize: 35}}>You know how clubs work...</h2>
                <h3 className="title" style={{color:'gray', fontSize: 25}}>The earlier you get in, the less you pay !</h3>
                <p className="description">Grab one of the first 2222 Raving Crabs for only 0.06 ETH instead of 0.07 ETH !</p>
                <br></br>
                <h5 style={{fontSize: 20}}>{2222-totalMinted} Raving Crabs left @0.06Ξ</h5>
                <ProgressBar striped variant="danger" animated now={totalMinted*100/2222} />
            </div>
        } else if(totalMinted < 2222 && totalMinted >= 2202){
            return <div>
            <h2 style={{fontSize: 35}}>You know how clubs work...</h2>
            <h3 className="title" style={{color:'gray', fontSize: 25}}>The earlier you get in, the less you pay !</h3>
            <p className="description">Grab one of the first 2222 Raving Crabs for only 0.06 ETH instead of 0.07 ETH !</p>
            <p className="description">Already minted : {totalMinted}</p>
            <br></br>
            <h5 style={{fontSize: 20}}>{2222-totalMinted} Raving Crabs left @0.06Ξ</h5>
            <ProgressBar striped variant="danger" animated now={totalMinted*100/2222} />
            <h5 style={{fontSize: 20, marginTop: 10}}>4444 Raving Crabs left @0.07Ξ</h5>
        </div>
        }
        else {
            return <div>
                <h2 style={{fontSize: 35}}>Mint your Raving Crab</h2>
                <h3 className="title" style={{color:'gray', fontSize: 25}}>{totalMinted} Raving Crabs have already been minted...</h3>
                <p className="description">What are you waiting for ? Join the community ! Mint your Raving Crab(s) and RAVE with us !</p>
                <br></br>
                <h5 style={{fontSize: 20}}>{6666-totalMinted} Crabs left @0.07Ξ</h5>
                <ProgressBar striped variant="danger" animated now={totalMinted*100/6666} />
            </div>
        }
    }

    return (

        
        <div className="active-dark">
            
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
                                            <div style={{display:"flex"}}><h1 className="title" style={{marginRight: 20}}>RAVING CRABS</h1><Music /></div><br/>
                                            <h1 className="title" style={{marginTop: -40}}><TextLoop interval={2000}>
                                                <span> 6666 CRABS</span>
                                                <span> 4 SPECIES</span>
                                                <span> 4 GOLDEN</span>
                                                <span> 25 FACTIONS</span>
                                                <span> +15 DANCES</span>
                                                <span> 1 COMMUNITY</span>
                                                <span> 1 FESTIVAL</span>
                                                <span> MINT YOURS NOW</span>

                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>Enter The Club and RAVE</h2>
                                            
                                            {/* <button style={{marginTop : 10, width: 300, height: 80, fontSize: 27}} type="submit" className="rn-btn" onClick={claimCard}>Mint your crab</button> */}
                                            <div style={{display: 'flex', marginTop: 25}}>
                                                <a target='_blank' href='https://discord.gg/mc4ycfredU' style={{marginRight: 10}} className="rn-button-style--2"><span><FaDiscord /> Discord</span></a>
                                                <a target='_blank' href='https://twitter.com/ravingcrabs' style={{marginLeft: 10}} className="rn-button-style--2"><span><FaTwitter /> Twitter</span></a>
                                            </div>
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
                                            
                                            {displayMintsLeft()}
                                            {/* <h5 style={{color:'red', fontSize: 22, marginTop: 5}}>LAUNCH ON NOVEMBER 17th 2021</h5> */}
                                        </div>
                                            <div style={{marginTop : 40}}>
                                                <span style={{fontSize: 20, color:'gray', marginLeft: 10, marginRight: 10}}>Amount : </span>
                                                <button onClick={incrementCount} style={{fontSize: 25, color:'white', height: 30, width : 30, border: 'none'}}><span style={{color:'gray'}}>+</span></button>
                                                <span style={{fontSize: 25, color:'white', marginLeft: 10, marginRight: 10}}>{count}</span>
                                                <button onClick={decrementCount} style={{fontSize: 25, color:'white', height: 30, width : 30, border: 'none'}}><span style={{color:'gray'}}>-</span></button>
                                            </div>
                                            <button style={{width: 350, height: 60, fontSize: 20}} type="submit" className="rn-btn" onClick={claimCard}>Mint your Raving Crab(s)</button>
                                            
                                    </div>
                                </div>
                            </div>
                            <div style={{marginTop: 50}}>
                                <div style={{display:'flex', alignItems:'center'}}><h2 style={{color:'gray', fontSize: 35}}>Mint your Raving Crab now and get a chance to <span style={{color:'#f9014c', fontSize: 45, marginLeft: 10}}> WIN 5 ETH !</span></h2></div>
                                <div style={{display:'flex'}}><p className="description" style={{color:'gray', fontSize: 21}}>If you mint one of our 4 ultra rare golden crab (like the Craby above), we will offer to buy it back for 5 ETH !*</p></div>
                                <div style={{display:'flex', justifyContent:'flex-end', marginRight: 13}}><p className="description" style={{color:'gray', fontSize: 11}}>*See roadmap</p></div>
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
                                <button disabled="true" className="rn-button-style--2" href="/contact"><span>Release on Nov. 17th 2021</span></button>

                                {/* <button disabled="true" className="rn-button-style--2" href="/contact"><span>Mint your raving crab</span></button> */}
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
                            {displayClubAccessPrevious()}
                            
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
