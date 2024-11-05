import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import LandingPageEmp from './Components/Employee/LandingPage/LandingPageEmp';
import LandingPageAdmin from './Components/Admin/LandingPage/LandingPageAdmin';
import ManageEmployeeList from './Components/Admin/ManageEmployeeList/ManageEmployeeList';
import ViewEmployeeList from './Components/Employee/ViewEmployeeList/ViewEmployeeList';
import EmpProfilePage from './Components/Employee/ProfilePage/EmpProfilePage';
import EditProfile from './Components/Employee/EditProfile/EditProfile';
import ViewLikes from './Components/Admin/ViewLikes/ViewLikes';

function App() {
    return (

        <div className='App-MainDiv'>
            <BrowserRouter>

                <Routes>

                    <Route exact path='/' element={<Registration />} />
                    <Route exact path='/Login' element={<Login />} />

                    {/* Employee */}
                    <Route exact path='/LandingEmp' element={<LandingPageEmp />} />
                    <Route exact path='/ViewEmployee' element={<ViewEmployeeList />} />
                    <Route exact path='/EmployeeProfile' element={<EmpProfilePage />} />
                    <Route exact path='/EditProfile/:id' element={<EditProfile />} />

                    {/* Admin */}
                    <Route exact path='/LandingAdmin' element={<LandingPageAdmin />} />
                    <Route exact path='/ManageEmp' element={<ManageEmployeeList />} />
                    <Route exact path='/ViewLikes' element={<ViewLikes/>} />


                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;