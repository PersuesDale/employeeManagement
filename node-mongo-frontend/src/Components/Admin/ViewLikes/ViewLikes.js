import React, { useState } from 'react'
import './ViewLikes.css'
import axiosInstance from '../../LHport/LHport';

function ViewLikes() {

    const [likes,setLikes] = useState ([]);

    const likefunction = () => {

        axiosInstance.post()

    }

    return (

        <div className='MainDiv'>

            <div className='VEL-TableContain'>

                <table className='VEL-Table'>

                    <thead className='VEL-thead'>

                        <tr className='VEL-tr-top'>

                            <th className='VEL-thead-th'>SL No.</th>
                            <th className='VEL-thead-th'>Liked Person</th>
                            <th className='VEL-thead-th'>Position</th>
                            <th className='VEL-thead-th'></th>
                            <th className='VEL-thead-th'>Liking Person</th>

                        </tr>

                    </thead>

                    <tbody className='VEL-tbody'>

                        <tr className='VEL-tr'>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

    )

}

export default ViewLikes