import React, {useEffect, useReducer} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom'


import backgroundImage from '../../assets/img/ship.jpeg';
import logoImage from '../../assets/img/logo.png';
import loginActions from '../../redux/actions/login.action'



function Login(props:any) {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector( (state:any) => {
        console.log(state);
        return state.login.isLoggedIn;
    })
    const handleSubmit = (event: any) => {
        alert('An essay was submitted: ');
        event.preventDefault();
        const payLoad = {Emailid: 'raju@gmail.com', Password: '777'};
        dispatch({type: loginActions.USER_LOGIN_REQUEST, payLoad});
    }

    useEffect(()=> {
            if(isLoggedIn)  {
                props.history.push('/dashboard')
            }
        },
        [isLoggedIn]);

    return (
        <div>
            Login Page
        </div>
    );
}

export default withRouter(Login);
