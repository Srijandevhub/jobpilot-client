import { Route, Routes, useLocation } from "react-router-dom"
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
import Protected from "./components/Protected/Protected"
import AllJobsPage from "./pages/AllJobsPage"
import ExploreCompaniesPage from "./pages/ExploreCompaniesPage"
import CompanyDetailsPage from "./pages/CompanyDetailsPage"
import ApplicationsPage from "./pages/ApplicationsPage"
import AppliedJobsPage from "./pages/AppliedJobsPage"

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
            <Route path="/explore-companies" element={<ExploreCompaniesPage />}/>
            <Route path="/job-details/:id" element={<JobDetailsPage />}/>
            <Route path="/company-details/:id" element={<CompanyDetailsPage />}/>
            <Route path="/dashboard/overview" element={<Protected><OverviewPage /></Protected>}/>
            <Route path="/dashboard/postjob" element={<Protected><PostJobPage /></Protected>}/>
            <Route path="/dashboard/myprofile" element={<Protected><MyProfilePage /></Protected>}/>
            <Route path="/dashboard/usermanagement" element={<Protected><UserManagementPage /></Protected>}/>
            <Route path="/dashboard/companymanagement" element={<Protected><CompanyManagementPage /></Protected>}/>
            <Route path="/dashboard/mycompany" element={<Protected><MyCompanyPage /></Protected>}/>
            <Route path="/dashboard/jobs" element={<Protected><AllJobsPage /></Protected>}/>
            <Route path="/dashboard/applications/:id" element={<Protected><ApplicationsPage /></Protected>}/>
            <Route path="/dashboard/applied-jobs" element={<Protected><AppliedJobsPage /></Protected>}/>
        </Routes>
    )
}
export default App
