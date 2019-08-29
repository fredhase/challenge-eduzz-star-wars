import React from 'react';

import Search from './Search';

import "../style/css/Header.css";
import StarWarsLogo from '../style/img/star-wars-logo.png';

class HeaderComp extends React.Component<any, any> {
    render () {
        return (
            <>
                <div className="header">
                    <img id="main-logo"
                    src={StarWarsLogo} alt="star wars logo"/>
                    <Search/>
                </div>    
            </>
        )
    }
}

export default HeaderComp;