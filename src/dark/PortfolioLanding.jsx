import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ServiceList from "../elements/service/ServiceList";
import BlogContent from "../elements/blog/BlogContent";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from 'react-redux';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CallAction from '../elements/callaction/CallAction';
import CustomizedTimeline from '../elements/common/Timeline';


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
        description = 'Raving Crabs is a collection of 10 000 UNIQUE NFT collectibles on the Ethereum Blockchain. Each NFT contains an animated 3D crab with its own characteristics and rarity. Owning crabs give you access to the club, our private space where the rave is permanent, as well as member-only benefits.';
    const PostList = BlogContent.slice(0 , 3);

    const connected = useSelector((state) => state.metamask_connected)
    const chainID = useSelector((state) => state.chainID)
    const userAddress = useSelector((state) => state.address)

    const [open, setOpen] = React.useState(false);

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
                <h4><b>Only members can enter The Club.</b></h4><p style={{color:'white'}}>1. Own at least 1 Raving Crab<br></br>2. Connect your wallet<br></br>3. Enter The Club<br></br>4. Rave.</p>
                <button style={{marginTop : 10, width: 400, height: 60, fontSize: 20}} type="submit" className="rn-btn" onClick={claimCard}>Mint your Raving Crab</button>

            </div>
        </div>
        }
        else {
            return <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <img src="/assets/images/portfolio/the_club_opened.jpg" alt='crab rave club opened'/>
                <div style={{justifyContent:'center'}}>
                    <h2 style={{color: 'green'}}>ACCESS AUTHORIZED</h2>
                    <h4><b>Only members can enter The Club.</b></h4>
                    <a style={{marginTop: 10, fontSize: 20}} className="rn-btn" href="/portfolio-details">Enter The Club</a>

                </div>
            </div>
            }
        }
    

    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />

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
                                            <TextLoop>
                                                <span> 10 000 CRABS</span>
                                                <span> 6 SPECIES</span>
                                                <span> 25 DANCES</span>
                                                <span> 6 GOLDEN CRABS</span>
                                                <span> MINT YOURS NOW</span>

                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>Enter The Club and RAVE</h2>
                                            <button style={{marginTop : 10, width: 300, height: 80, fontSize: 27}} type="submit" className="rn-btn" onClick={claimCard}>Mint your crab</button>
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

            {/* Start About Area */}
            <div id="about" className="fix">
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-8.jpg" alt="About Images"/>
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

            <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <span>JOIN THE CLUB</span>
                                <h2>LET THE RAVE BEGIN</h2>
                                <button className="rn-button-style--2" href="/contact"><span>Mint your raving crab</span></button>
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

            {/* Start Blog Area */}
            {/* <div id="blog" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
            </div> */}
            {/* End Blog Area */}

            {/* Start COntact Area */}
            {/* <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="Hire Me." />
                </div>
            </div> */}
            {/* End COntact Area */}

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
