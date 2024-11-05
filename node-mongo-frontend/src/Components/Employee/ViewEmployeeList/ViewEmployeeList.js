import React, { useEffect, useState } from 'react'
import './ViewEmployeeList.css'
import axios from 'axios'
import axiosInstance from '../../LHport/LHport';

function ViewEmployeeList() {

    const [DbData, setDbData] = useState([]);

    const aFunction = () => {

        axios.post('http://localhost:8000/findAll')
            .then((response) => {

                console.log(response.data)
                setDbData(response.data.data)


            })
            .catch((error) => {

                console.log(error)

            })

    }

    const LikeHandler = (id) => {

        axiosInstance.post('/Likes', { likedperson: id, likingperson: localStorage.getItem('keyid') })
            .then((response) => {

                console.log(response)

            })
            .catch((error) => {

                console.log(error)

            })

    }

    useEffect(() => {

        aFunction();

    }, [])

    return (

        <div className='VEL-MainDiv'>

            {/* border for the table */}

            <div className='VEL-TableContain'>

                <table className='VEL-Table'>

                    <thead className='VEL-thead'>

                        <tr className='VEL-tr-top'>

                            <th className='VEL-thead-th'>Sl No.</th>
                            <th className='VEL-thead-th'>Name</th>
                            <th className='VEL-thead-th'>Age</th>
                            <th className='VEL-thead-th'>Position</th>
                            <th className='VEL-thead-th'></th>

                        </tr>

                    </thead>

                    <tbody className='VEL-tbody'>

                        {DbData.length > 0 ? (

                            DbData.map((name, index) => {

                                return (

                                    <tr className='VEL-tr' key={index}>

                                        <td className='VEL-td'>{index + 1}</td>
                                        <td className='VEL-td'>{name.firstname} {name.lastname}</td>
                                        <td className='VEL-td'>{name.age}</td>
                                        <td className='VEL-td'>{name.position}</td>
                                        <td className='VEL-td'><button className='btn btn-success' onClick={() => { LikeHandler(name._id) }}>Like Me?</button></td>

                                    </tr>

                                )

                            })

                        ) : (
                            <tr>
                                <td><p className=' text-danger'>Data fetch failed</p></td>
                            </tr>
                        )

                        }
                    </tbody>

                </table>

            </div>
        </div>

    )

}

export default ViewEmployeeList