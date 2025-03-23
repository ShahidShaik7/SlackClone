import React from 'react';
import './MainScreen.css';
import NavBar from '../Components/NavBar';
import SnackBar from '../Components/SnackBar';
import slackVideo from './../Images/slack.webm'
import googleLogo from './../Images/google.webp'
import comp1 from './../Images/comp1.png'
import comp2 from './../Images/comp2.jpeg'
import comp3 from './../Images/comp3.png'
import comp4 from './../Images/comp4.png'
import comp5 from './../Images/comp5.png'
import comp6 from './../Images/comp6.png'
import slackVideo1 from './../Images/video2.webm'



const MainScreen = () => {

    const images = [comp1, comp2, comp3, comp4, comp5, comp6]

    return (
        <div className="mainscreen">
            <div className="mainscreen-navbar">
                <NavBar />
            </div>
            <div className='mainscreen-snackbar'>
                <SnackBar />
            </div>
            <div className='mainscreen-main'>
                <div className='mainscreen-main-div1'>
                    <div className='mainscreen-main-div1-text1'>
                        Slack is where the future works
                    </div>
                    <div className='mainscreen-main-div1-text2'>
                        Transform the way you work with one place for every one and everything you need to get stuff done.
                    </div>
                    <div className='mainscreen-main-div1-buttons'>
                        <div className='mainscreen-main-div1-buttons-tryforfree'>
                            TRY FOR FREE
                        </div>
                        <div className='mainscreen-main-div1-buttons-google'>
                            <div className='mainscreen-main-div1-buttons-google-image'>
                                <img
                                    src={googleLogo}
                                    alt='Google'
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div>
                                SIGN UP WITH GOOGLE
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mainscreen-main-div2'>
                    <video autoPlay loop playsInline>
                        <source src={slackVideo} type="video/webm" />
                    </video>
                    <div className='mainscreen-main-div2-icon1'>
                        👍 3
                    </div>
                    <div className='mainscreen-main-div2-icon2'>
                        🎉 5
                    </div>
                    <div className='mainscreen-main-div2-icon3'>
                        💡 8
                    </div>
                    <div className='mainscreen-main-div2-icon4'>
                        👀 5
                    </div>
                </div>
            </div>
            <div className='mainscreen-companies'>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt="image"
                            width={image === comp6 ? 40 : 120}
                            height={40}
                        />
                    </div>
                ))}
            </div>
            <div className='mainscreen-bottom'>
                <div className='mainscreen-main-div2'>
                    <video controls>
                        <source src={slackVideo1} type="video/webm" />
                    </video>
                </div>
                <div className='mainscreen-bottom-div2'>
                    <div className='mainscreen-bottom-div2-text1'>
                        Now is your moment to build a better tomorrow
                    </div>
                    <div className='mainscreen-bottom-div2-text2'>
                        We've seen what the future code can be. Now it's time to decide what it will be.
                    </div>
                    <div className='mainscreen-bottom-div2-button'>
                        WATCH VIDEO
                    </div>
                </div>
            </div>
        </div>
    )
};


export default MainScreen;