import React, { useState } from 'react'
import './Registration.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Registration() {

    const Navigate = useNavigate()

    const [userDetails, setUserDetails] = useState({ userid: '', firstname: '', lastname: '', email: '', age: null, position: '', password: '', confirmpassword: '' })

    const onChangeHandler = (e) => {

        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.name === 'image' ? e.target.files[0] : e.target.value
        })

    }

    const RedirectRegistration = (e) => {

        e.preventDefault();
        console.log(userDetails)

        const formData = new FormData();
        for (let key in userDetails) {
            formData.append(key, userDetails[key]);
        }
        // formData.append('image',userDetails.image);

        console.log('theformdata', formData)

        axios.post('http://localhost:8000/saveData', formData, { headers: { 'Content-Type': 'multipart/formdata' } })
            .then((response) => {
                alert(response.data.msg)
                // Navigate('/Login')
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (

        <div className="MainDiv">

            <div className="InputContain">
                {/* Header */}

                <h1 className='Header'>Registration</h1>

                <div className='InputFieldContain'>

                    {/* Left side */}

                    <div className='InputFieldContainLeft'>

                        <div>
                            <label for='UID'>Employee ID :</label>
                        </div>

                        <div>
                            <label for='FirstName'>First Name :</label>
                        </div>

                        <div>
                            <label for='LastName'>Last Name :</label>
                        </div>

                        <div>
                            <label for='Email'>Email : </label>
                        </div>

                        <div>
                            <label for='Age'>Age : </label>
                        </div>

                        <div>
                            <label for='Position'>Position : </label>
                        </div>

                        <div>
                            <label for="Pass">Password : </label>
                        </div>

                        <div>
                            <label for="RePass">Confirm Password : </label>
                        </div>

                        <div>
                            <label for="image">Upload Picture : </label>
                        </div>

                    </div>

                    {/* Right Side */}

                    <div className='InputFieldContainRight'>

                        {/* UserID field */}
                        <div className='InputDiv'>
                            <input type='text' className='UID' name='userid' onChange={onChangeHandler} />
                        </div>

                        {/* First Name */}
                        <div>
                            <input type='text' className='FName' name='firstname' onChange={onChangeHandler} />
                        </div>

                        {/* Last Name */}
                        <div>
                            <input type='text' className='LName' name='lastname' onChange={onChangeHandler} />
                        </div>

                        {/* Email field */}
                        <div className='InputDiv'>
                            <input type='email' className='Email' name='email' onChange={onChangeHandler} />
                        </div>

                        {/* Age */}
                        <div>
                            <input type='number' className='Age' name='age' onChange={onChangeHandler} />
                        </div>

                        {/* Position */}
                        <div>
                            <input type='text' className='Position' name='position' onChange={onChangeHandler} />
                        </div>

                        {/* password field */}
                        <div className='InputDiv'>
                            <input type='password' className='Pass' name='password' onChange={onChangeHandler} />
                        </div>

                        {/* confirm password */}
                        <div className='InputDiv'>
                            <input type='password' className='RePass' name='confirmpassword' onChange={onChangeHandler} />
                        </div>

                        {/* image */}
                        <div className='InputDiv'>
                            <input type='file' className='profpic' name='image' onChange={onChangeHandler} />
                        </div>

                    </div>

                </div>

                {/* register button */}

                <div className='InputDiv'>

                    <button className='btn btn-primary RegisterButton' onClick={RedirectRegistration}>Register</button>

                </div>

                {/* login button */}

                <div className="RegisteredDiv">

                    <label>Already Registered?</label>
                    <Link to='/Login'><button className='btn btn-primary LoginButton'>Login</button></Link>

                </div>

            </div>

        </div>
    )
}

export default Registration