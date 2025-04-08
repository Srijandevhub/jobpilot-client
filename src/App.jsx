import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import RegisterPage from "./pages/RegisterPage"
import FindJobPage from "./pages/FindJobPage"
import JobDetailsPage from "./pages/JobDetailsPage"
import OverviewPage from "./pages/OverviewPage"
import PostJobPage from "./pages/PostJobPage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/signin" element={<SignInPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/find-job" element={<FindJobPage />}/>
                <Route path="/job-details" element={<JobDetailsPage />}/>
                <Route path="/dashboard/overview" element={<OverviewPage />}/>
                <Route path="/dashboard/postjob" element={<PostJobPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App
