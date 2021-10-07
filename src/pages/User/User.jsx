import React from 'react'
import './user.css'
import { PersonOutline, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'

export default function User() {
    return (
        <div className="userSingle">
            <div className="userContainer">
                <span className="lefttitle">Edit User</span>
                <button className="createbtn">Create</button>
            </div>
            <div className="mainContainer">
                <div className="leftContainer">
                    <div className="profilePage">
                        <img className="profileimg" src="https://imgs.capitalfm.com/images/196405?crop=16_9&width=660&relax=1&signature=epMN-8iEbps2AdWKohxX32arbAo=" alt=""></img>
                        <div className="profileContainer">
                            <h3 className="username">Florence Pugh</h3>
                            <h3 className="usertitle">Software Engineer</h3>
                        </div>
                    </div>
                    <span class="head">Account Details</span>
                    <div className="accounts">
                        <div className="userAccount">
                            <PersonOutline className="profileIcon" />
                            <span>florencepush69</span>
                        </div>

                        <div className="userAccount">
                            <CalendarToday className="profileIcon" />
                            <span>11.Aug.1995</span>
                        </div>
                    </div>

                    <span class="head">Contact Details</span>
                    <div className="accounts">
                        <div className="userAccount">
                            <PhoneAndroid className="profileIcon" />
                            <span>+1 123-456-789</span>
                        </div>

                        <div className="userAccount">
                            <MailOutline className="profileIcon" />
                            <span>florencepugh123@gmail.com</span>
                        </div>

                        <div className="userAccount">
                            <LocationSearching className="profileIcon" />
                            <span>Las Vegas, New York</span>
                        </div>
                    </div>
                </div>
                <div className="rightContainer">
                    <h3 className="righttitle">Edit</h3>
                    <div className="formConntainer">
                        <form className="formleft">
                            <label className="name">Username</label>
                            <input type="text" placeholder="florencepush69"></input>

                            <label className="fullname">Full Name</label>
                            <input type="text" placeholder="Florence Pugh"></input>

                            <label className="email">Full Name</label>
                            <input type="text" placeholder="florencepugh123@gmail.com"></input>

                            <label className="phone">Full Name</label>
                            <input type="text" placeholder="+1 123-456-789"></input>

                            <label className="Address">Full Name</label>
                            <input type="text" placeholder="Las Vegas, New York"></input>
                        </form>
                        <form className="formRight">
                            <div className="imageContainer">
                                <img className="rightimg" src="https://imgs.capitalfm.com/images/196405?crop=16_9&width=660&relax=1&signature=epMN-8iEbps2AdWKohxX32arbAo=" alt=""></img>
                                <label htmlFor="file">
                                    <Publish className="upload" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }}></input>
                            </div>
                            <button className="updatebtn">Update</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
