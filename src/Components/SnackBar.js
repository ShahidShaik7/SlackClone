import React from "react";
import './SnackBar.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';



const SnackBar = () => {


    return(
        <div className="snackbar">
            <div className="snackbar-inner">
                <div className="snackbar-inner-div1">
                    <span className="snackbar-inner-div1-text1">
                        Slack is your digital HQ,
                    </span>
                    <span className="snackbar-inner-div1-text2">
                        Meet the new features keeping teams connected in a work-from-anywhere world.
                    </span>
                    <div className="snackbar-inner-div1-letsgo">
                        <div className="snackbar-inner-div1-letsgo-text">
                            Let's go
                        </div>
                        <div className="snackbar-inner-div1-letsgo-icon">
                            <EastRoundedIcon/>
                        </div>
                    </div>
                </div>
                <div className="snackbar-inner-close">
                    <CloseRoundedIcon/>
                </div>
            </div>
        </div>
    )
};


export default SnackBar;