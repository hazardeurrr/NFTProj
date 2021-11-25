import React, { Component } from "react";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import IPFSGatewayTools from '@pinata/ipfs-gateway-tools/dist/browser'
import {connect} from 'react-redux'
import { NavItem } from "react-bootstrap";
import Chip from '@mui/material/Chip';
import contract_address from '../../elements/contract_address'
import { NavLink } from 'react-router-dom'

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

const mapDispatchToProps = (dispatch) => ({ 
    chain: (i) => dispatch({ type: 'SET_CHAINID', id: i }),
    setaddress: (i) => dispatch({ type: 'SET_ADDRESS', id: i }),
    connection_status: (i) => {dispatch({ type: 'SET_CONNECTED', id: i }); console.log('dispatchin', i)},
    setW3: (i) => dispatch({ type: 'SET_WEB3', id: i }),
    setContract: (i) => dispatch({ type: 'SET_CONTRACT', id: i}),
    setTokenNbr: (i) => dispatch({ type: 'SET_TOTALMINTED', id: i}),
    setTotalOwned: (i) => dispatch({ type: 'SET_TOTALOWNED', id: i})

});

const mapStateToProps = state => {
    return {
        connected: state.metamask_connected,
        userAddress : state.address,
        chainID: state.chainID,
        web3 : state.web3Instance,
        contract: state.contractInstance,
        totalOwned : state.totalOwned,
    }
}



class PortfolioList extends Component {
    constructor(props) {
      super(props)
      this.props = props
      this.state = {tokensOwned: []}  
    }
  
    async componentDidMount() {
        await this.displayToken();
    
      }

        gatewayTools = new IPFSGatewayTools();

  
         column = "col-lg-4 col-md-6 col-sm-6 col-12";
         styevariation = "text-center mt--40";

         list = PortfolioListContent.slice(0 , this.props.item);
 



        async displayToken(){
            
            let tid = undefined
            for (var i = 0; i < this.props.totalOwned; i++) {
                tid = await this.props.contract.methods.tokenOfOwnerByIndex(this.props.userAddress, i).call()
                this.setState({ tokensOwned: [...this.state.tokensOwned, await this.displayInfos(tid)] })
            }
        }

        async displayInfos(tokenId){
            let img = ''
            let name = ''
            let animation_url = ''
            let properties = ''
            let dna = ''
            let promise = this.props.contract.methods.tokenURI(tokenId).call().then(uri => {
                let convertedURI = this.gatewayTools.convertToDesiredGateway(uri, 'https://ipfs.io')
              let promise = fetch(convertedURI)
              .then(res => res.json())
              .then(data => {
                img = this.gatewayTools.convertToDesiredGateway(data.image, 'https://ipfs.io')
                animation_url = this.gatewayTools.convertToDesiredGateway(data.animation_url, 'https://ipfs.io')
                name = data.name
                properties = data.attributes
                dna = data.dna
                const token = {tokenId, name, img, properties, animation_url, dna}
                return token
              })
              return promise
            })
            return promise
          }

        //   fetch(this.gatewayTools.convertToDesiredGateway(data.image, 'https://ravingcrabs.mypinata.cloud'))
        //   .then(res => res.blob())
        //   .then(data => {
        //       const imageObjectURL = URL.createObjectURL(data);
        //       console.log(imageObjectURL)
        //       return imageObjectURL
        //   })
    displayblob(url){
        console.log(url)
        return <img src={url} alt="raving crab"/>
    }

    render() {
        return(
             <React.Fragment> 
                 {this.state.tokensOwned.map((item) => (
                     <div className={`${this.column}`} key={item.name}>
                         <div className={`portfolio ${this.styevariation}`}>
                             <div className="content">
                                 <div className="inner">
                                 <div style={{display:'flex', justifyContent:'center'}}><h4>{item.name}</h4>
                                 <a href={`https://opensea.io/assets/${contract_address.contract_address}/${item.name.substring(1)}`}>
                                 <img style={{height: 40, marginLeft: 20, marginTop: -3}} src='/assets/images/opensea.png' alt="opensea"/></a>    
                                </div>
                                <NavLink
                                    to={{
                                        pathname:"/model_detailed",
                                        aboutProps:{
                                            token:item
                                            }
                                        }}
                                        exact
                                    ><img style={{border: '5px solid #f8004c'}} src={item.img} alt="raving crab preview"/>
                                </NavLink>
                                     {/* <div className="large-only">
                                        {item.properties.map((att =>  
                                            <Chip style={{height: 38, paddingLeft: 7, paddingRight: 7, marginLeft: 5, marginRight : 5, marginTop: 5, marginBottom: 5}} 
                                            label = {(
                                                <section>
                                                <div style={{ marginTop: 3, color: '#f8004c', fontStyle:'italic', fontSize:12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '20rem'}}> {att.trait_type}</div>
                                                <div style={{ marginTop: -8.5, color:'rgba(160,160,160,1)', fontSize: 17, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '7rem'}}> {att.value}</div>
                                                </section>
                                            )}
                                            variant="outlined" />
                                        ))}
                                    </div> */}
                                     {/* <div className="portfolio-button">
                                         <a className="rn-btn" href={`https://opensea.io/assets/${contract_address.contract_address}/${item.name.substring(1)}`}>View on Opensea</a>    
                                     </div> */}
                                 </div>
                             </div>
                         </div>
                     </div>
                 ))}
               
             </React.Fragment>



            // <React.Fragment> 
            //    {metadatas.map((a) => (
            //          <div className={`${column}`} key={a.name}>
            //              <div className={`portfolio ${styevariation}`}>
            //                  <div className="thumbnail-inner">
            //                      <div className={`thumbnail ${a.name}`}></div>
            //                      <div className={`bg-blr-image ${a.image}`}></div>
            //                  </div>
            //                  <div className="content">
            //                      <div className="inner">
            //                          <p>{a.description}</p>
            //                          <h4>{a.name}</h4>
            //                          <div className="portfolio-button">
            //                              <a className="rn-btn" href="/portfolio-details">View on Opensea</a>
            //                          </div>
            //                      </div>
            //                  </div>
            //              </div>
            //          </div>
            //      ))}
               
            // </React.Fragment>
        )
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(PortfolioList);