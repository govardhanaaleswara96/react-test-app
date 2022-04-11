import React,{ useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/user/userContext';


export default function HomePage() {
    const userContext = useContext(UserContext);
   const {userDetails,rate} = userContext;

   const onClick = async e => {
   // e.preventDefault();
    let userId ="624f0cf109a2d226a49a5e09";  
    await userContext.getRatings(userId);
  }; 
     return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h2>performance management</h2>
                </div>
                <div className='card-body'>
                <div className='row'>
                    <div className='col-md-4'>
                        {/* empty */}
                    </div>
                    <div className='col-md-4'>
                <select value="" className='form-control'>
                   <option value="">Select Year</option>
                    <option value="Orange">2018</option>
                    <option value="Radish">2019</option>
                    <option value="Cherry">2020</option>
                    <option value="Cherry">2021</option>
                    <option value="Cherry">2022</option>
                </select>
                <br/>
                <button  onClick={onClick}  className="btn btn-lg btn-danger">Submit</button>
                <div className='mt-5'>
                   <h3>Ratings : {rate?rate:0} </h3>
                </div>
                </div>
                    <div className='col-md-4'>
                             {/* empty */}
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
