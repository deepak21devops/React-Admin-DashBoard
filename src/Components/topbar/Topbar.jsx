import React from 'react'
import './topbar.css'

import { NotificationsNone, Language, Settings } from '@material-ui/icons'

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-container">
                <div className="topleft">Informatics</div>
                <div className="topright">
                    <div className="imageContainer">
                        <NotificationsNone />
                        <span className="notify">1</span>
                    </div>

                    <div className="imageContainer">
                        <Language />
                        <span className="notify">1</span>
                    </div>

                    <div className="imageContainer">
                        <Settings />
                    </div>
                    <img className="profile" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile"></img>
                </div>
            </div>
        </div>
    )
}
