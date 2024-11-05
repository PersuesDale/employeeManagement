import React from 'react'
import './LandingPageEmp.css'
import { Link } from 'react-router-dom'

function LandingPageEmp() {

    return (

        <div className='LPE-MainDiv'>

            <Link to={'/ViewEmployee'}><button className='btn btn-primary'>View Employee list</button></Link>
            <Link to={'/EmployeeProfile'}><button className='btn btn-primary'>View Profile</button></Link>

        </div>

    )
    
}

export default LandingPageEmp