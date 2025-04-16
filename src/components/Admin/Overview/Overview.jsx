import { Col, Row } from 'react-bootstrap'
import styles from './Overview.module.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { Flip, toast } from 'react-toastify';
import axios from 'axios';
import { baseUrl } from '../../../url';

const Overview = () => {
    const user = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/overview/`, { withCredentials: true });
                setData(res.data);
            } catch (error) {
                if (error.status === 500) {
                    toast.error(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    });
                } else {
                    toast.warn(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    });
                }
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <h1 className={styles.welcome}>Hello, {user?.data?.fullname}</h1>
            <p className={styles.text}>Here is you daily activities and applications</p>
            <Row>
                {
                    user?.data?.role === 'super_admin' &&
                    <Col lg={4}>
                        <div className={`${styles.widgetBx} bg-warning-subtle`}>
                            <i className={styles.icon}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
                                </svg>
                            </i>
                            <div className={styles.widgetBody}>
                                <p className={styles.count}>{data?.applicant}</p>
                                <p className={styles.action}>Applicants</p>
                            </div>
                        </div>
                    </Col>
                }
                {
                    user?.data?.role === 'super_admin' &&
                    <Col lg={4}>
                        <div className={`${styles.widgetBx} bg-danger-subtle`}>
                            <i className={styles.icon}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
                                </svg>
                            </i>
                            <div className={styles.widgetBody}>
                                <p className={styles.count}>{data?.companyadmin}</p>
                                <p className={styles.action}>Company Admins</p>
                            </div>
                        </div>
                    </Col>
                }
                {
                    user?.data?.role === 'super_admin' &&
                    <Col lg={4}>
                        <div className={`${styles.widgetBx} bg-success-subtle`}>
                            <i className={styles.icon}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
                                </svg>
                            </i>
                            <div className={styles.widgetBody}>
                                <p className={styles.count}>{data?.recruiter}</p>
                                <p className={styles.action}>Recruiters</p>
                            </div>
                        </div>
                    </Col>
                }
                {
                    user?.data?.role === 'super_admin' &&
                    <Col lg={4}>
                        <div className={`${styles.widgetBx} bg-primary-subtle`}>
                            <i className={styles.icon}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                                </svg>
                            </i>
                            <div className={styles.widgetBody}>
                                <p className={styles.count}>{data?.company}</p>
                                <p className={styles.action}>Comapnies</p>
                            </div>
                        </div>
                    </Col>
                }
            </Row>
            {
                user?.data?.role === 'recruiter' || user?.data?.role === 'company_admin' &&
                <h2 className={styles.heading}>Recently Posted Jobs</h2>
            }
        </>
    )
}

export default Overview
