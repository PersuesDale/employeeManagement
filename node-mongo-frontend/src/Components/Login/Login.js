import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

    const Navigate = useNavigate()

    const [loginData, setLoginData] = useState({ userid: '', password: '' })

    const onChangeHandle = (e) => {

        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })

    }

    const RedirectToLanding = (e) => {

        e.preventDefault();
        axios.post("http://localhost:8000/userLogin", loginData)
            .then((response) => {
                alert(response.data.msg)
                console.log(response.data.id)
                localStorage.setItem('keyid', response.data.id)
                Navigate('/LandingEmp'); {/* remember to put link */ }
                // to remove localstorageitem, do localstorage.removeItem('keyname')
                // to use localstorageitem in a different instance, use localstorage.getItem('keyname')
            })
            .catch((error) => {
                alert(error.data.msg)
            })

    }

    return (

        <div className='Main-Div'>

            <div className='Input-Field-Contain'>

                {/* Header */}
                <h1 className='Header'>LOGIN</h1>

                {/* UID */}
                <div className='Input-Div'>
                    <label>User ID: </label>
                    <input type='text' name='userid' onChange={onChangeHandle} className='Input-UserID' />
                </div>

                {/* PW */}
                <div className='Input-Div'>
                    <label>Password:</label>
                    <input type='Password' name='password' onChange={onChangeHandle} className='Input-Password' />
                </div>

                {/* Login Button */}
                <div className='Input-Div'>
                    <button className='btn btn-primary Login-Button' onChange={onChangeHandle} onClick={RedirectToLanding}>Login</button>
                </div>

                {/* redirect to register */}
                <div className='Register-Div'>
                    <p>Not Registered?</p>
                    <Link to={'/'}><button className='btn btn-primary'>Register</button></Link>
                </div>

            </div>

        </div>
    )
}

export default Login