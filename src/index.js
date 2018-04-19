import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Tab from '@/pages/tabbar';
import Project from '@/pages/project';
import Borrower from '@/pages/project/borrower';
import Info from '@/pages/project/info';
import Risk from '@/pages/project/risk';
import Use from '@/pages/project/use';
import Records from '@/pages/project/records';
import Calculator from '@/pages/calculator/major';
import Relax from '@/pages/calculator/relax';


import "assets/less/index.less";

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Tab} />
                    <Route exact path="/project" component={Project} />
                    <Route path="/project/borrower" component={Borrower} />
                    <Route path="/project/info" component={Info} />
                    <Route path="/project/risk" component={Risk} />
                    <Route path="/project/use" component={Use} />
                    <Route path="/project/records" component={Records} />
                    <Route path="/calculator/major" component={Calculator} />
                    <Route path="/calculator/relax" component={Relax} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
