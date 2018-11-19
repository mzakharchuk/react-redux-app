import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';

import HomePage from './components/home/homePage'
import AboutPage from './components/about/aboutPage'

class Index extends  React.Component {

    render(){
        return <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                    </Switch>
                </div>
            </Router>
        </div>
    }   
}

ReactDOM.render(<Index/>,document.getElementById('app'))