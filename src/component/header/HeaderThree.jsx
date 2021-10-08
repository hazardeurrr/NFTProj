import React, { Component } from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import {connect} from 'react-redux'
import detectEthereumProvider from '@metamask/detect-provider';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const Web3 = require('web3');


const mapDispatchToProps = (dispatch) => ({ 
    chain: (i) => dispatch({ type: 'SET_CHAINID', id: i }),
    setaddress: (i) => dispatch({ type: 'SET_ADDRESS', id: i }),
    connection_status: (i) => {dispatch({ type: 'SET_CONNECTED', id: i }); console.log('dispatchin', i)},
});

const mapStateToProps = state => {
    return {
        connected: state.metamask_connected,
        userAddress : state.address,
        chainID: state.chainID
    }
}

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaDiscord /> , link: 'https://www.discord.gg/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class HeaderThree extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        
        this.state = {
            providerDetected: false,
            open: false,
        }
      
        this.initProvider();


       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })

        
        
    }


    handleClickOpen = () => {
        this.setState({open: true});
      };
    
    handleClose = () => {
        this.setState({open: false});
      };
  
    async initProvider(){
          const provider = await detectEthereumProvider();
  
          if (provider) {
              this.setState({providerDetected: true})
              this.startApp(provider); // Initialize your app
              console.log('Provider found')
          } else {
            this.setState({providerDetected: false})
            console.log('Please install MetaMask!');
          }
      }
  
    async startApp(provider) {
          // If the provider returned by detectEthereumProvider is not the same as
          // window.ethereum, something is overwriting it, perhaps another wallet.
          if (provider !== window.ethereum) {
              console.error('Do you have multiple wallets installed?');
          }
          // Access the decentralized web!
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          this.props.chain(chainId)
          if(chainId !== '0x1'){
              console.log("Please change your network to Ethereum Mainnet on Metamask")
          }

          window.ethereum.on('chainChanged', this.handleChainChanged);
  
          window.ethereum
          .request({ method: 'eth_accounts' })
          .then((value) => {
              this.handleAccountsChanged(value)
              localStorage.setItem('current_address', value[0])
          })
          .catch((err) => {
              // Some unexpected error.
              // For backwards compatibility reasons, if no accounts are available,
              // eth_accounts will return an empty array.
              console.error(err);
          });
  
          // Note that this event is emitted on page load.
          // If the array of accounts is non-empty, you're already
          // connected.
          window.ethereum.on('accountsChanged', this.handleAccountsChanged);
  
      }
  
      // For now, 'eth_accounts' will continue to always return an array
      handleAccountsChanged = (accounts) => {
          if (accounts.length === 0) {
          // MetaMask is locked or the user has not connected any accounts
          console.log('Please connect to MetaMask.');
          this.props.connection_status(false)
          } else {
              console.log("in accounts changed")
              this.props.connection_status(true)
              this.props.setaddress(accounts[0])
  
             // var web3 = new Web3(window.ethereum)
            //   const bbst_contract = new web3.eth.Contract(bbstabi.abi, '0xDd1Ad9A21Ce722C151A836373baBe42c868cE9a4');
            //   bbst_contract.methods.balanceOf(accounts[0]).call().then(response => {
            //       console.log('response', response)
            //   }).catch(console.error)

            // MAY BE PUT NFT REFERENCES HERE OR THE CONTRACT IDK
  
  
  
              
          }
      }
  
      connect = () => {
          if(this.state.providerDetected){
              window.ethereum
              .request({ method: 'eth_requestAccounts' })
              .then((value) => {
                  this.handleAccountsChanged(value);
              })
              .catch((err) => {
                  if (err.code === 4001) {
                  // EIP-1193 userRejectedRequest error
                  // If this happens, the user rejected the connection request.
                  console.log('Please connect to MetaMask.');
                  } else {
                  console.error(err);
                  }
              });
          } else {
              console.log("Install Metamask.io")
              this.handleClickOpen()
          }
  
        }
  
  
  
  
  
  
  
  
      handleChainChanged = (_chainId) => {
          // We recommend reloading the page, unless you must do otherwise
          this.props.chain(_chainId)
          // prompt CHANGE TO MAINNET ?!
          window.location.reload();
      }

  
      isConnected = () => {
          if (!this.props.connected) {
              return (
                  <>
                  <button type="submit" className="rn-btn" onClick={() => this.connect()}>Connect Wallet</button>
                  </>
              )
          } else if(this.props.userAddress !== undefined){
              return (
                <>
                    <button className="rn-btn">{this.props.userAddress.slice(0,5)}...{this.props.userAddress.slice(this.props.userAddress.length - 4, this.props.userAddress.length)}</button>
                </>
              )
          }
      }

    


    
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    stickyHeader () {}

    connecting() {
        console.log("pressed the connect btn")
    }

    render(){

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        const { logo, color='default-color' } = this.props;
        let logoUrl;
        if(logo === 'light'){
            logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
        }else if(logo === 'dark'){
            logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-dark'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-dark.png" alt="Digital Agency" />;
        }else if(logo === 'symbol-light'){
            logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
        }else{
            logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
        }
        
        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={this.props.homeLink}>
                                {logoUrl}
                            </a>
                        </div>
                        {/* <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','service','portfolio','blog','contact']} currentClassName="is-current" offset={-200}>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#service">Service</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </Scrollspy>
                        </nav> */}
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="header-btn">
                            {this.isConnected()}
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>

                        
                        <Dialog
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"You don't have Metamask !"}</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        You need to have Metamask installed to access this feature. Metamask is a browser plugin that serves as an Ethereum Wallet.
                                        <br></br><br></br>Please install it at <b><a target="_blank" href="https://metamask.io/download.html">metamask.io</a></b>.
                                    </DialogContentText>
                                    </DialogContent>
                                </Dialog>
                    </div>
                </div>
            </header>
        )
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderThree);