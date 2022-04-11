import React,{useState,useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

import '../../App.css';
export default function SignInPage() {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const {userId,loginDeatils} = userContext;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            userName:userName,
            password:password
        };
        await userContext.loginUser(user);
        console.log(loginDeatils);
        if (loginDeatils.message === "User Login successfully") {
            setUserName("");
            setPassword("");
            alert("User Login successfully");
            history.push("/home");
            window.localStorage.setItem("token", loginDeatils.accessToken);
          } else {
            alert("User Access Denied");
          }
      };
    
    return (
        <div className="text-center p-5 m-5-auto">
            <h2>Welcome To Our App</h2>
            <form onSubmit={handleSubmit} >
                <p>
                    <label>Username</label><br/>
                    <input type="text"
                    onChange={(e) => setUserName(e.target.value)}  
                    value={userName} 
                    required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password"
                    onChange={(e) => setPassword(e.target.value)}  
                    value={password} 
                    required />
                </p>
                <p className='mt-3'>
                    <button className='btn btn-lg btn-info' id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
