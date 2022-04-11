import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';
import {
  LOGIN_USER,
  CREATE_USER,
  GET_RATINGS,
} from '../types';

const UserState = props => {
  const initialState = {
    userDetails:[],
    userId:"",
    loginDeatils:[],
    registerDetails:[],
    rate:""
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);
  //GET USER RATINGS
  const getRatings = async (userId) => {
   // console.log(userId);
    const res = await axios.get(
      `user/${userId}`
    );
    dispatch({
      type: GET_RATINGS,
      payload: res.data
    });
  };
 // LOGIN USER
  let loginUser = async (user) => {
    const res = await axios.post("user/login",user);
    //console.log(res);
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
  };
// CREATE USER
let createUser = async (user) => {
  const res = await axios.post("user",user);
  //console.log(res);
  dispatch({
    type: CREATE_USER,
    payload: res.data
  });
};

  return (
    <UserContext.Provider
      value={{
        userDetails:state.userDetails,
        userId:state.userId,
        loginDeatils:state.loginDeatils,
        registerDetails:state.registerDetails,
        rate:state.rate,
        getRatings,
        loginUser,
        createUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
