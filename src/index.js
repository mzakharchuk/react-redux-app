import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { Router} from 'react-router-dom';

import App from './components/app'
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/toastr/build/toastr.min.css'

import { loadCourses } from "./_actions/courseActions"; 
import { loadAuthors } from "./_actions/authorActions"; 


import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import {history} from './_helpers'

import { configureFakeBackend } from './_helpers/fake-backend';
configureFakeBackend();

const store = configureStore()

class Index extends Component {

    // loading data
    componentDidMount(){
        store.dispatch(loadCourses())
        store.dispatch(loadAuthors())
    }

    render(){
        return( 
            <Provider store={store}>
                 <Router history={history}>
                    <App/>
                </Router>
        </Provider>
        )
    }   
}

ReactDOM.render(<Index/>,document.getElementById('app'))