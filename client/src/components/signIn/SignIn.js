import React, {useState} from 'react'
import './signIn.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleClick =(e)=>{
        e.preventDefault();
    }
    return (
        <>
            <div className="formContainer">
                <div className="form">
                    <form action="">
                        <div className="heading">Login</div>
                        <div>
                            <input className="inputbox" type="email" autoComplete='off' placeholder='Enter Your Email' required 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input className="inputbox" id='password' type="password" autoComplete='off' placeholder='Enter Your Password' required value={password} 
                            onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                        <div className='btnContainer'> <Link to={'/'}><button className="btn" >Login</button></Link> </div>
                        <div className="para">Don't have an account ?</div>
                        <div><a href="/SignUp" className='astyle'>Sign Up</a></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn
