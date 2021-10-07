import React from 'react'
import './widgetsm.css'
import { Visibility } from '@material-ui/icons'


export default function WidgetSM() {

    return (
        <div className="widgetsm">
            <h3 className="title">New Joinee Members</h3>
            <div className="widgetwrapper">
                <ul className="widgetList">
                    <li className="widgetItems">
                        <img className="profileImg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt="robert"></img>
                        <div className="dataContainer">
                            <span className="username">Sarah Keller</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                        <button className="btn"><Visibility className="btnIcon" /> Display</button>
                    </li>

                    <li className="widgetItems">
                        <img className="profileImg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt="robert"></img>
                        <div className="dataContainer">
                            <span className="username">Sarah Keller</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                        <button className="btn"><Visibility className="btnIcon" /> Display</button>
                    </li>

                    <li className="widgetItems">
                        <img className="profileImg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt="robert"></img>
                        <div className="dataContainer">
                            <span className="username">Sarah Keller</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                        <button className="btn"><Visibility className="btnIcon" /> Display</button>
                    </li>

                    <li className="widgetItems">
                        <img className="profileImg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt="robert"></img>
                        <div className="dataContainer">
                            <span className="username">Sarah Keller</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                        <button className="btn"><Visibility className="btnIcon" /> Display</button>
                    </li>

                    <li className="widgetItems">
                        <img className="profileImg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt="robert"></img>
                        <div className="dataContainer">
                            <span className="username">Sarah Keller</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                        <button className="btn"><Visibility className="btnIcon" /> Display</button>
                    </li>

                    <li className="widgetItems">
                        <img className="profileImg" src="https://cdn.totallythebomb.com/wp-content/uploads/2020/02/Depositphotos_268207010_l-2015-465x700.jpg.webp" alt="robert"></img>
                        <div className="dataContainer">
                            <span className="username">Sarah Keller</span>
                            <span className="profession">Software Engineer</span>
                        </div>
                        <button className="btn"><Visibility className="btnIcon" /> Display</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
