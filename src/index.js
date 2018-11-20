import "@babel/polyfill";
import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom';

import App from './components/app'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const store = configureStore()

class Index extends Component {

    render(){
        return( 
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
        </Provider>
        )
    }   
}

ReactDOM.render(<Index/>,document.getElementById('app'))