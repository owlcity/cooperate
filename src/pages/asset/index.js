/**
 * Created by zk on 2018/4/11
 */
import React from 'react';

export default class Asset extends React.Component{
    render(){
        return(
            <div>
                <div className="yellow-bg padding-vertical tac">
                    <div className="white-color text-shadow">
                        本月待回款
                    </div>
                    <div className="white-color text-shadow fz24 padding-vertical">
                        29102.21
                    </div>
                    <div className="white-color text-shadow">
                        本月已回款 290.21元
                    </div>
                </div>
            </div>
        )
    }
}