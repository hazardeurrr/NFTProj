import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux'
import contract_address from "../contract_address";

const mapStateToProps = state => {
    return {
        totalMinted : state.totalMinted,
    }
}

class TabsTwo extends Component{

    
    render(){        
        let 
        tab1 = "Specs",
        tab2 = "Stats",
        tab3 = "Technical Details";
        const tabStyle = this.props.tabStyle
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <b>Each crab is unique</b><br></br>
                                                   Crabs are generated progammatically with their own traits, including species, color, accessories, faction and obviously DANCE MOVES ! 
                                               </li>
                                               <li>
                                                   <b>Rarity matters</b><br></br>
                                                   Some crabs are rarer than others. Special characteristics can appear on your crab, increasing its value.<br></br>4 ultra-rare golden crabs are also part of the collection.
                                               </li>
                                               
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <b>Number of Crabs </b> : 6666
                                                </li>
                                                <li>
                                                    <b>Crabs left to be claimed </b> : {6666-this.props.totalMinted}
                                                    {/* See on the contract how many are already minted here */}
                                                </li>
                                               
                                                <li>
                                                    <b>Price </b> : 0.06 ETH for the first 2222 mints / 0.07 ETH otherwise
                                                </li>
                                               
                                                
                                            </ul>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   Raving Crabs are stored as <b>ERC-721</b> tokens on the <b>Ethereum blockchain.</b>
                                               </li>
                                               <li>
                                                   Metadata is hosted on IPFS (decentralized).
                                               </li>
                                               <li>
                                                   Official smart contract is : <a target="_blank" href={`https://etherscan.io/address/${contract_address.contract_address}`}><b><i>{contract_address.contract_address}</i></b></a>
                                               </li>
                                               <li>
                                                   Official Opensea page : <a target="_blank" href="https://opensea.io/collection/ravingcrabs"><b><i>https://opensea.io/collection/ravingcrabs</i></b></a>
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}


export default connect(
    mapStateToProps
)(TabsTwo);