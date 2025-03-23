import React from 'react';
import './NavBar.css';
import slackLogo from './../Images/slack_logo.png';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const NavBar = () => {



    return(
        <div className='navbar'>
            <div className='navbar-inner'>
                <div className='navbar-inner-div1'>
                    <div className='navbar-inner-div1-logo'>
                        <img
                           src={slackLogo}
                           alt="Slack Logo"
                           width={30}
                           height={30}
                        />
                        <div className='navbar-inner-div1-logo-title'>
                            Slack
                        </div>
                    </div>
                    <div className='navbar-inner-div1-nav1'>
                        Product
                        <div className='navbar-inner-div1-nav1-icon'>
                            <KeyboardArrowDownRoundedIcon fontSize='small'/>
                        </div>
                    </div>
                    <div className='navbar-inner-div1-nav2'>
                        Enterprise
                    </div>
                    <div className='navbar-inner-div1-nav3'>
                        Resources
                    </div>
                    <div className='navbar-inner-div1-nav4'>
                        Pricing
                    </div>
                </div>
                <div className='navbar-inner-div2'>
                    <div className='navbar-inner-div2-search'>
                        <SearchRoundedIcon/>
                    </div>
                    <div className='navbar-inner-div2-signin'>
                        Sign in
                    </div>
                    <div className='navbar-inner-div2-talktosales'>
                        TALK TO SALES
                    </div>
                    <div className='navbar-inner-div2-tryforfree'>
                        TRY FOR FREE
                    </div>
                </div>
            </div>
        </div>
    )
};


export default NavBar;