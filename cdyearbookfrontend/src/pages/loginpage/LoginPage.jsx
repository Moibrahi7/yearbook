import "./LoginPage.css";
import authData from "../../resources/auth.json"
import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";


export default function LoginPage () {
    const { email, setEmail, password, setPassword } = useContext(AuthContext);
    const [ tempEmail, setTempEmail] = useState('');
    const [ tempPassword, setTempPassword ] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tempEmail === "" || tempPassword === "") {
          alert("Please enter email and password");
          return;
        }
        if(authData.find(user => user.username === tempEmail && user.password === tempPassword)){
            setEmail(tempEmail);
            setPassword(tempPassword);
            navigate('/')
        }
        else{
            alert("Incorrect username or password");
        }
        console.log({ email, password });
      };
    return (
        <>
        <div className="wave-2"> <img src="/img/wav.svg" alt="wave"/> </div>
            <form action="/home" onSubmit={handleSubmit} className="log-in-form">
                <h1 className="signin-title">Sign In</h1>
                <h2>Username:</h2>
                <input 
                id="username" 
                className="input-field" 
                type="email"
                value={tempEmail}
                placeholder="Enter email" 
                onChange={(e) => setTempEmail(e.target.value)}
                required
                />
                <h2>Password:</h2>
                <input 
                id="password" 
                className="input-field" 
                placeholder="Enter password" 
                type="password"
                value={tempPassword}
                onChange={(e) => setTempPassword(e.target.value)}
                required
                />
                <button type="submit" value="Sign In" className="sign-in-btn">Sign In</button>
            </form>
        </>
    )
}