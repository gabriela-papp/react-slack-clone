import React from 'react'
import './Login.css'
import logo from './logo.svg'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'
import { useStateValue} from './StateProvider'
import { actionTypes} from './reducer'

function Login() {
const [state, dispatch]=useStateValue()

    const signIn=()=>{
        auth
        .signInWithPopup(provider)
        .then(result=>{
            console.log(result)
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error=>{
            alert(error.message)
        })
    }
    return (
        <div className='login'>
            <div className="login_container">
                <img src={logo} alt='logo'/>
                <h1>Sign in</h1>
                <p>Why not sign in?</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
