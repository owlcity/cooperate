import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// default
import Tab from '@/pages/default/tabbar';
import Project from '@/pages/default/project';
import Borrower from '@/pages/default/project/borrower';
import Info from '@/pages/default/project/info';
import Risk from '@/pages/default/project/risk';
import Use from '@/pages/default/project/use';
import Records from '@/pages/default/project/records';
import Invest from '@/pages/default/project/invest';
import InvestSuccess from '@/pages/default/project/success';
import Calculator from '@/pages/default/calculator/major';
import Relax from '@/pages/default/calculator/relax';
import CalcValue from '@/pages/default/calculator/result';
import Version from '@/pages/default/version';
// account
import Mylend from '@/pages/account/mylend';
import MylendDetail from '@/pages/account/mylend/detail';
import Profit from '@/pages/account/profit';
import Total from '@/pages/account/total';
import Capitaldetails from '@/pages/account/capitaldetails';
import Bill from '@/pages/account/bill';
import Charge from '@/pages/account/charge';
import Withdraw from '@/pages/account/withdraw';
import WithdrawBack from '@/pages/account/withdraw/callback';
import BankCard from '@/pages/account/bankcard';
import GoldCoin from '@/pages/account/goldcoin';
import GoldCoinDetail from '@/pages/account/goldcoin/detail';
import Setting from '@/pages/account/setting';
import Passwords from '@/pages/account/setting/password';
import Address from '@/pages/account/setting/address';
import EditAddress from '@/pages/account/setting/editaddress';
import Personal from '@/pages/account/setting/personal';
import Tickets from '@/pages/account/tickets';
import TicketsInvalid from '@/pages/account/tickets/invalid';
import Prize from '@/pages/account/prize';
import Msg from '@/pages/account/msg';
import MsgDetail from '@/pages/account/msg/detail';



// public
import Fail from '@/pages/public/result/fail';


import "assets/less/index.less";

class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Tab} />
                    <Route exact path="/project" component={Project} />
                    <Route path="/project/invest" component={Invest} />
                    <Route path="/project/success" component={InvestSuccess} />
                    <Route path="/project/borrower" component={Borrower} />
                    <Route path="/project/info" component={Info} />
                    <Route path="/project/risk" component={Risk} />
                    <Route path="/project/use" component={Use} />
                    <Route path="/project/records" component={Records} />
                    <Route path="/calculator/major" component={Calculator} />
                    <Route path="/calculator/relax" component={Relax} />
                    <Route path="/calculator/result" component={CalcValue} />
                    <Route path="/result/fail" component={Fail} />
                    <Route path="/version" component={Version} />

                    <Route path="/account/profit" component={Profit} />
                    <Route path="/account/total" component={Total} />
                    <Route path="/account/capitaldetails" component={Capitaldetails} />
                    <Route exact path="/account/mylend" component={Mylend} />
                    <Route path="/account/mylend/detail" component={MylendDetail} />
                    <Route path="/account/bill" component={Bill} />
                    <Route path="/account/charge" component={Charge} />
                    <Route exact path="/account/withdraw" component={Withdraw} />
                    <Route path="/account/withdraw/callback" component={WithdrawBack} />
                    <Route path="/account/bankcard" component={BankCard} />
                    <Route exact path="/account/goldcoin" component={GoldCoin} />
                    <Route path="/account/goldcoin/detail" component={GoldCoinDetail} />
                    <Route exact path="/account/setting" component={Setting} />
                    <Route path="/account/setting/password" component={Passwords} />
                    <Route path="/account/setting/address" component={Address} />
                    <Route path="/account/setting/editaddress" component={EditAddress} />
                    <Route path="/account/setting/personal" component={Personal} />
                    <Route exact path="/account/tickets" component={Tickets} />
                    <Route path="/account/tickets/invalid" component={TicketsInvalid} />
                    <Route exact path="/account/prize" component={Prize} />
                    <Route exact path="/account/msg" component={Msg} />
                    <Route path="/account/msg/detail" component={MsgDetail} />




                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
