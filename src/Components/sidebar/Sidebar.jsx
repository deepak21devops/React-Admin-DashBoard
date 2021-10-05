import React from 'react'
import {
    LineStyle, Timeline, TrendingUp
    , PersonOutline, ProductionQuantityLimits, AttachMoney,
    Equalizer, MailOutline, ChatBubbleOutline, Feedback, WorkOutline, ReportGmailerrorred
} from '@material-ui/icons'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-Menu">
                    <h3 className="sidebar-title">DashBoard</h3>
                    <ul className="sidebarlist">
                        <li className="sidebaritems">
                            <LineStyle className="icon" />
                            <span>Home</span>
                        </li>
                        <li className="sidebaritems">
                            <Timeline className="icon" />
                            <span>Analytics</span>
                        </li>
                        <li className="sidebaritems">
                            <TrendingUp className="icon" />
                            <span>Trending</span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* 2 */}
            <div className="sidebar-wrapper">
                <div className="sidebar-Menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <li className="sidebaritems">
                            <PersonOutline className="icon" />
                            <span>Users</span>
                        </li>
                        <li className="sidebaritems">
                            <WorkOutline className="icon" />
                            <span>Products</span>
                        </li>
                        <li className="sidebaritems">
                            <AttachMoney className="icon" />
                            <span>Transactions</span>
                        </li>

                        <li className="sidebaritems">
                            <Equalizer className="icon" />
                            <span>Reports</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 3 */}

            <div className="sidebar-wrapper">
                <div className="sidebar-Menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebarlist">
                        <li className="sidebaritems">
                            <MailOutline className="icon" />
                            <span>Mail</span>
                        </li>
                        <li className="sidebaritems">
                            <ChatBubbleOutline className="icon" />
                            <span>Feedback</span>
                        </li>
                        <li className="sidebaritems">
                            <Feedback className="icon" />
                            <span>Messages</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 4 */}
            <div className="sidebar-wrapper">
                <div className="sidebar-Menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebarlist">
                        <li className="sidebaritems">
                            <WorkOutline className="icon" />
                            <span>Manage</span>
                        </li>
                        <li className="sidebaritems">
                            <Timeline className="icon" />
                            <span>Analytics</span>
                        </li>
                        <li className="sidebaritems">
                            <WorkOutline className="icon" />
                            <span>Reports</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
