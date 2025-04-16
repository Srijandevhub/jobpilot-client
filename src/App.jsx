import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import RegisterPage from "./pages/RegisterPage"
import FindJobPage from "./pages/FindJobPage"
import JobDetailsPage from "./pages/JobDetailsPage"
import OverviewPage from "./pages/OverviewPage"
import PostJobPage from "./pages/PostJobPage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { protectedUser } from "./utils/userSlice"
import MyProfilePage from "./pages/MyProfilePage"
import UserManagementPage from "./pages/UserManagementPage"
import CompanyManagementPage from "./pages/CompanyManagementPage"
import MyCompanyPage from "./pages/MyCompanyPage"

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(protectedUser());
    }, [dispatch, location.pathname])
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/signin" element={<SignInPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/find-job" element={<FindJobPage />}/>
            <Route path="/job-details" element={<JobDetailsPage />}/>
            <Route path="/dashboard/overview" element={<OverviewPage />}/>
            <Route path="/dashboard/postjob" element={<PostJobPage />}/>
            <Route path="/dashboard/myprofile" element={<MyProfilePage />}/>
            <Route path="/dashboard/usermanagement" element={<UserManagementPage />}/>
            <Route path="/dashboard/companymanagement" element={<CompanyManagementPage />}/>
            <Route path="/dashboard/mycompany" element={<MyCompanyPage />}/>
        </Routes>
    )
}
export default App
