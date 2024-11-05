import React, { useEffect, useState } from 'react'
import './ManageEmployeeList.css'
import axios from 'axios';
import axiosInstance from '../../LHport/LHport';

function ManageEmployeeList() {

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

    const buttonOnClick = (id) => {

        axiosInstance.post('/aDeleteFunction/' + id)
            .then((response) => {
                aFunction();
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {

        aFunction();

    }, [])

    return (

        <div className='MEL-MainDiv'>

            {/* border for the table */}

            <div className='MEL-TableContain'>

                <table className='MEL-Table'>

                    <thead className='MEL-thead'>

                        <tr className='MEL-tr-top'>

                            <th className='MEL-thead-th'>Sl No.</th>
                            <th className='MEL-thead-th'>Name</th>
                            <th className='MEL-thead-th'>Age</th>
                            <th className='MEL-thead-th'>Position</th>
                            <th> </th>

                        </tr>

                    </thead>

                    <tbody className='MEL-tbody'>

                        {DbData.length > 0 ? (

                            DbData.map((name, index) => {

                                return (

                                    <tr className='MEL-tr' key={index}>{ }

                                        <td className='MEL-td'>{index + 1}</td>
                                        <td className='MEL-td'>{name.firstname}{name.lastname}</td>
                                        <td className='MEL-td'>{name.age}</td>
                                        <td className='MEL-td'>{name.position}</td>
                                        <td><button className='btn btn-danger' onClick={() => buttonOnClick(name._id)}>Delete</button></td>

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

export default ManageEmployeeList