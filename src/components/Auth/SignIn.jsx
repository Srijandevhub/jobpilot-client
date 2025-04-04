import { Col, Row } from "react-bootstrap"
import Illustration from '../../assets/Illustration.svg'
import styles from './Auth.module.css'
import Logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
import InputGroup from "../Inputs/InputGroup"
import { useState } from "react"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Row className="m-0">
            <Col className="p-0" lg={6}>
                <div className="d-flex justify-content-end">
                    <div className={styles.wrapper}>
                        <div className="p-4 w-100">
                            <span className="d-flex mb-5">
                                <img src={Logo} alt="logo"/>
                            </span>
                            <h1 className="page-heading">Sign In</h1>
                            <p className={styles.text}>Don't have account <Link to="/register">Create Account</Link></p>
                            <InputGroup type={'email'} id={"email"} value={email} onChange={(val) => setEmail(val)} placeholder={"Email address"}/>
                            <InputGroup type={"password"} id={"password"} value={password} onChange={(val) => setPassword(val)} placeholder={"Password"}/>
                            <button className={styles.btn}>
                                Sign In
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col className="p-0 d-lg-block d-none" lg={6}>
                <div className="bg-secondary-subtle d-flex align-items-center justify-content-center p-4 vh-100">
                    <img src={Illustration} alt="illustration" style={{ maxWidth: '100%' }}/>
                </div>
            </Col>
        </Row>
    )
}

export default SignIn