import React, {useState} from "react";
import './signUp.css'
import { Link } from "react-router-dom";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");
    return (
        <>
            <div className="mainConatiner">
                <div className="imgContainer"></div>
                <div className="registerContainer">
                    <div className="signUpHeading">Sign Up</div>
                    <div className="signUpForm">
                        <form >
                            <div className="name">
                                <div className="labelAndInput" >
                                    <label htmlFor="firstName" className="inputLabel" >First Name</label><br />
                                    <input type="text" id="firstName" className="signUpInputBox" placeholder="Enter Your First Name" required autoComplete="off" 
                                    value={firstName}
                                    onChange={(e)=> setFirstName(e.target.value)} />
                                </div>
                                <div className="labelAndInput" >
                                    <label htmlFor="lastName" className="inputLabel" >Last Name</label><br />
                                    <input type="text" id="lastName" className="signUpInputBox" placeholder="Enter Your Last Name" required autoComplete="off"
                                    value={lastName}
                                    onChange={(e)=> setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="contact">
                                <div className="labelAndInput" >
                                    <label htmlFor="email" className="inputLabel" >Email</label><br />
                                    <input type="email" id="email" className="signUpInputBox" placeholder="Enter Your Email" required autoComplete="off"
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)} />
                                </div>
                                <div className="labelAndInput" >
                                    <label htmlFor="phoneNumber" className="inputLabel" >Phone Number</label><br />
                                    <input type="number" id="phoneNumber" className="signUpInputBox" placeholder="Enter Your Phone Number" required autoComplete="off" 
                                    value={phoneNo}
                                    onChange={(e)=> setPhoneNo(e.target.value)} />
                                </div>
                            </div>
                            <div className="password">
                                <div className="labelAndInput" >
                                    <label htmlFor="password" className="inputLabel" >Password</label><br />
                                    <input type="password" id="password" className="signUpInputBox" placeholder="Enter Your Password" required autoComplete="off"
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)} />
                                </div>
                                <div className="labelAndInput" >
                                    <label htmlFor="password" className="inputLabel" >Confirm Password</label><br />
                                    <input type="password" id="password" className="signUpInputBox" placeholder="Enter Confirmed Password" required autoComplete="off"
                                    value={confPass}
                                    onChange={(e)=> setConfPass(e.target.value)} />
                                </div>
                            </div>
                            <div className="signUpBtnContainer"> <Link to={'/SignIn'} ><button className="signUpBtn">SIGN UP</button></Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp