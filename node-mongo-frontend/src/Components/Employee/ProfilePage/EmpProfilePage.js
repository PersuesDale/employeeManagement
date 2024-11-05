import React, { useEffect, useState } from 'react'
import './EmpProfilePage.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function EmpProfilePage() {

    const [DbData, setDbData] = useState({})

    const id = localStorage.getItem('keyid')

    const BackendData = () => {

        axios.post('http://localhost:8000/findusingId/' + id)
            .then((response) => {

                console.log('responseda', response.data)
                setDbData(response.data.data)

            })
            .catch((error) => {

                console.log(error)

            })

    }

    useEffect(() => {

        BackendData();

    }, [])

    return (

        <div className='EPP-MainDiv'>

            <div className='EPP-SubDiv'>

                <div className='EPP-container-div'>

                    <div className='EPP-labelContain'>

                        <label for='name'>Name:</label>
                        <label for='age'>Age:</label>
                        <label for='position'>Position:</label>

                    </div>

                    <div className='EPP-PContain'>

                        <p name='name'>{DbData.firstname} {DbData.lastname}</p>
                        <p name='age'>{DbData.age}</p>
                        <p name='position'>{DbData.position}</p>

                    </div>

                </div>

                <Link to={'/EditProfile/' + id}><button className='  btn btn-primary'>Edit</button></Link>

            </div>

        </div>

    )

}

export default EmpProfilePage