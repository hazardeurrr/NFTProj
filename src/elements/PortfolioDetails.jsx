import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import PortfolioList from "../elements/portfolio/PortfolioList";
import { useSelector } from 'react-redux';
import Music2 from "../elements/common/Music2";


const SlideList = [
    {
        textPosition: 'text-left',
        category: 'Join the crew',
        description: '',
        buttonText: '',
        buttonLink: ''
    }
]



const PortfolioDetails = () => {

    const connected = useSelector((state) => state.metamask_connected)
    const chainID = useSelector((state) => state.chainID)
    const userAddress = useSelector((state) => state.address)

    const web3 = useSelector((state) => state.web3Instance)
    const contract = useSelector((state) => state.contractInstance)
    const totalMinted = useSelector((state) => state.totalMinted)
    const tokensOwnedNbr = useSelector((state) => state.totalOwned)
 

   

    const displayClubAccess = () => {
        if(!connected || userAddress === undefined || chainID !== '0x4'){ // CHANGER EN '0x1'
            return displayClosedClub()
        } else {
            if(tokensOwnedNbr <= 0){
                return displayClosedClub()
            }  else {
                return <div>
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                <h2 className="title">Welcome to The Club</h2><Music2 />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: 50, alignItems:'flex-start'}}>
                        <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" />
                    </div>
                </div>
                }
            }
        }

    const displayClosedClub = () => {

                return <div><div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                        <h2 className="title">The Club is for MEMBERS ONLY</h2>
                    </div>
                </div>
            </div>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <img src="/assets/images/portfolio/the_club.jpg" alt='crab rave club'/>
                <div style={{justifyContent:'center'}}>
                    <h2 style={{color: 'red'}}>ACCESS DENIED</h2>
                    <h4><b>Only members can enter The Club.</b></h4><p style={{color:'white'}}>1. Connect your Metamask wallet<br></br>2. Get at least 1 Raving Crab<br></br>3. Enter The Club<br></br>4. Rave.</p>
                    {/* <button style={{marginTop : 10, width: 400, height: 60, fontSize: 20}} type="submit" className="rn-btn" onClick={claimCard}>Mint your Raving Crab</button> */}
    
                </div>
            </div></div>
    }


    return (
        <div className="active-dark">
            <Helmet pageTitle="Portfolio Landing" />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black"/>

              
            {/* Start Portfolio Area */}
            <div id="portfolio" className="fix">
                <div className="portfolio-area bg_color--1" style={{paddingTop: 150}}>
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            
                            {displayClubAccess()}
                            
                            
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

export default PortfolioDetails;
