import React from 'react'
import './Login.css'
import logo from './fb-logo.png'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    // Extract 'dispatch' to be used here to update user info.
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(
            result => {
               dispatch({
                   type: actionTypes.SET_USER,
                   user: result.user,
               }) 
            }
        ).catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img src={logo} alt=''/>
                <h1>Facebook</h1>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
