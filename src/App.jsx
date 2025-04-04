import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import RegisterPage from "./pages/RegisterPage"
import FindJobPage from "./pages/FindJobPage"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/signin" element={<SignInPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/find-job" element={<FindJobPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App
