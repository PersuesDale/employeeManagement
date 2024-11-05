import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './EditProfile.css'

function EditProfile() {

    const [DbData, setDbData] = useState({})
    const [updateDetails, setUpdateDetails] = useState({ firstname: '', lastname: '', age: null, position: '' })

    const { id } = useParams()

    const Navigate = useNavigate()

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

    const onChangeHandler = (e) => {

        setUpdateDetails({
            ...updateDetails,
            [e.target.name]: e.target.value
        })

    }

    const onClickHandler = (e) => {

        e.preventDefault();
        axios.post('http://localhost:8000/findandupdate/' + id, updateDetails)
            .then((response) => {

                alert(response.data.msg)
                Navigate('/EmployeeProfile')

            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {

        BackendData();

    }, [])

    return (

        <div className='EP-MainDiv'>

            <div className='Subdiv'>

                <div className='container-div'>

                    <div className='LabelContain'>

                        <label for='firstname'>First Name:</label>
                        <label for='lastname'>Last Name:</label>
                        <label for='age'>Age:</label>
                        <label for='position'>Position:</label>

                    </div>

                    <div className='inputContain'>

                        <input type='text' name='firstname' placeholder={DbData.firstname} onChange={onChangeHandler} />
                        <input type='text' name='lastname' placeholder={DbData.lastname} onChange={onChangeHandler} />
                        <input type='text' name='age' placeholder={DbData.age} onChange={onChangeHandler} />
                        <input type='text' name='position' placeholder={DbData.position} onChange={onChangeHandler} />

                    </div>

                </div>

                <button className=' btn btn-primary' onClick={onClickHandler}>Update</button>

            </div>

        </div>

    )

}

export default EditProfile