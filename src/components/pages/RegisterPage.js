import React,{useState,useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import UserContext from '../../context/user/userContext';
import '../../App.css';

export default function SignInPage() {
    const history = useHistory();
    const userContext = useContext(UserContext);
    const {userId,registerDetails} = userContext;
    const [userName, setUserName] = useState("");
    const active = 1;
    const type = 1;
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        let user = {
            userName:userName,
            password:password,
            active:active,
            type:type,
            firstName:firstName,
            lastName:lastName,
            password:password,
            email:email,
            year,year,
            rating:rating
        };
        await userContext.createUser(user);
        console.log(registerDetails);
        if (registerDetails.message === "User Created Successfully") {
            setUserName("");
            setPassword("");
            alert("User Created Successfully");
            history.push("/login");
          } else {
            alert("User Access Denied");
            history.push("/login");
          }
      };

    return (
        <div className="text-center m-5-auto">
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}  >
                <p>
                    <label>User Name</label><br/>
                    <input type="text"
                    onChange={(e) => setUserName(e.target.value)}  
                    value={userName} 
                    required />
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email"
                    onChange={(e) => setEmail(e.target.value)}  
                    value={email} 
                    required />
                </p>
                <p>
                    <label>password</label><br/>
                    <input type="password"
                    onChange={(e) => setPassword(e.target.value)}  
                    value={password} 
                    required />
                </p>
                <p>
                    <label>FirstName</label><br/>
                    <input type="text"
                    onChange={(e) => setFirstname(e.target.value)}  
                    value={firstName} 
                    required />
                </p>
                <p>
                <label>LastName</label><br/>
                <input type="text"
                    onChange={(e) => setLastName(e.target.value)}  
                    value={lastName} 
                    required />
                </p>
                <p>
                <label>year</label><br/>
                <input type="text"
                    onChange={(e) => setYear(e.target.value)}  
                    value={year} 
                    required />
                </p>
                <p>
                <label>Rating</label><br/>
                <input type="text"
                    onChange={(e) => setRating(e.target.value)}  
                    value={rating} 
                    required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
