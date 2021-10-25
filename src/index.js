// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';


// Dark Home Layout 
import DarkPortfolioLanding from './dark/PortfolioLanding';

import PortfolioDetails from "./elements/PortfolioDetails";
import error404 from "./elements/error404";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { useStore } from '../store'
import { Provider } from 'react-redux'



class Root extends Component{
    render(){

        const store = useStore()
        console.log('app launched')

        return(
        <Provider store={store}>

            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding}/>

                        {/* Element Layot */}
                        <Route exact path={`${process.env.PUBLIC_URL}/the_club`} component={PortfolioDetails}/>
                        
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        </Provider>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();