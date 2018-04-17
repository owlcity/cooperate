import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link, BrowserRouter as Router } from 'react-router-dom';
import Tab from '@/pages/tabbar';
import Project from '@/pages/project';

import "assets/less/index.less";

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Tab} />
                    <Route path="/project" component={Project} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
