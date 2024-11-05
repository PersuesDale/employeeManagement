import React from 'react'
import './LandingPageAdmin.css'
import { Link } from 'react-router-dom'

function LandingPageAdmin() {

    return (

        <div className='LPA-MainDiv'>

            {/* View Employees */}

            <Link to={'/ManageEmp'}><button className='ViewEmpButt btn btn-primary'>Manage Employee list</button></Link>

            {/* View Profile */}

            <button className='btn btn-primary'>View Profile</button>

        </div>

    )

}

export default LandingPageAdmin