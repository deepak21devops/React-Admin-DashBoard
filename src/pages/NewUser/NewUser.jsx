import React from 'react'
import './newUser.css'

export default function NewUser() {
    return (
        <div className="newUserContainer">
            <h3 className="newUserTii">New User</h3>
            <form className="UserContainer">

                <div className="userItem">
                    <label>Username</label>
                    <input type="text" placeholder="Deepak"></input>
                </div>

                <div className="userItem">
                    <label>Fullname</label>
                    <input type="text" placeholder="Deepak Kumar Bakki"></input>
                </div>

                <div className="userItem">
                    <label>Email</label>
                    <input type="email" placeholder="deepak123@gmail.com"></input>
                </div>

                <div className="userItem">
                    <label>Password</label>
                    <input type="password" placeholder="password"></input>
                </div>

                <div className="userItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123-456-7890"></input>
                </div>

                <div className="userItem">
                    <label>Address</label>
                    <input type="text" placeholder="Las Vegas, New York"></input>
                </div>

                <div className="userItem">
                    <label>Gender</label>
                    <div className="radioContainer">
                        <input type="radio" id="male" name="gender" value="Male"></input>
                        <label for="male">Male</label>

                        <input type="radio" id="female" name="gender" value="Female"></input>
                        <label for="female">Female</label>

                        <input type="radio" id="others" name="gender" value="Others"></input>
                        <label for="others">Others</label>
                    </div>

                </div>

                <div className="userItem">
                    <label className="selOption">Active</label>
                    <select className="userSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="createbtn">Create</button>
            </form>
        </div>
    )
}
