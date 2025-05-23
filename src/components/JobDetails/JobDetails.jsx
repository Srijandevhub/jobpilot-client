import { Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "react-bootstrap"
import styles from './JobDetails.module.css'
import Bookmark from '../../assets/bookmarkblue.svg'
import Add from '../../assets/add.svg'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../../url"
import { useSelector } from "react-redux"
import { Flip, toast } from "react-toastify"

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const JobDetails = () => {
    const user = useSelector((state) => state.user);
    const { id } = useParams();
    const [fixed, setFixed] = useState(false);
    const [data, setData] = useState(null);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }
    const navigate = useNavigate();
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        window.scrollTo(0, 0);
        const fetchJob = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/public/job/${id}`);
                setData(res.data.job);
            } catch (error) {
                if (error.status === 404) {
                    navigate("/find-job");
                }
                console.log(error);
            }
        }
        fetchJob();
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/user/resumes`, { withCredentials: true });
                setResumes(res.data.resumes);
            } catch (error) {
                console.log(error);
            }
        }
        if (user?.data) {
            fetchResumes();
            if (user.data.appliedjobids.includes(id)) {
                setApplied(true);
            }
        }
    }, [user])
    const getDate = (input) => {
        const curr = new Date(input);
        const month = curr.getMonth();
        const year = curr.getFullYear();
        const date = String(curr.getDate()).padStart(2, '0');
        return `${date} ${months[month]}, ${year}`;
    }
    const [showModal, setShowModal] = useState(false);
    const [resumes, setResumes] = useState([]);
    const [resumeid, setResumeid] = useState("none");
    const [coverletter, setCoverletter] = useState("");

    const [applied, setApplied] = useState(false);

    const handleApply = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/v1/application`, {
                jobid: id,
                resumelink: resumeid,
                coverletter,
                matchedskills: data.job.skillids.filter(id => user?.data?.skillids.includes(id)).length,
                recruiterid: data.postedby
            }, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip
            });
            setResumeid("none");
            setCoverletter("");
            setApplied(true);
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
        } finally {
            setShowModal(false);
        }
    }

    return (
        <>
            {
                data ?
                <>
                <Modal centered show={showModal} onHide={() => setShowModal(false)} id="applyModal">
                    <ModalHeader closeButton>
                        Apply Job: {data.job.title}
                    </ModalHeader>
                    <ModalBody>
                        <label className="form-label">Resumes</label>
                        <select className="form-select" value={resumeid} onChange={(e) => setResumeid(e.target.value)}>
                            <option value="none">--Select--</option>
                            {
                                resumes.map((item, index) => {
                                    return <option key={index} value={item._id}>{item.publicid}</option>
                                })
                            }
                        </select>
                        <label className="form-label">Coverletter</label>
                        <textarea className="form-control" value={coverletter} onChange={(e) => setCoverletter(e.target.value)}></textarea>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={() => handleApply()}>Apply</button>
                    </ModalFooter>
                </Modal>
                {
                    fixed &&
                    <div className={`p-3 ${styles.fixed} bg-light-subtle shadow`}>
                        <Container>
                            <div className="d-flex align-items-center justify-content-between w-100" style={{ flexWrap: 'wrap' }}>
                                <div className={styles.media}>
                                    <i className={styles.icon}>
                                        <img src={data.company.logoimage} alt="facebook"/>
                                    </i>
                                    <div className={styles.body}>
                                        <h2 className={styles.heading}>{data.job.title}</h2>
                                        <span className={styles.action}>at {data.company.name} {user ? <>({data.job.skillids.filter(id => user?.data?.skillids.includes(id)).length}/{data.job.skillids.length} skills matched)</> : ''}</span>
                                    </div>
                                </div>
                                <ul className={`d-flex align-items-center ${styles.btns}`}>
                                    <li>
                                        <button className={styles.saveBtn}>
                                            <img src={Bookmark} alt="bookmark"/>
                                        </button>
                                    </li>
                                    <li>
                                        <button className={`${styles.btn} ${applied ? 'disabled' : ""}`} onClick={() => {
                                            if (!user?.data) {
                                                navigate("/signin");
                                            }
                                            setShowModal(true);
                                        }} disabled={applied}>
                                            {
                                                applied ?
                                                "Applied"
                                                :
                                                <>
                                                Apply now
                                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                                </svg>
                                                </>
                                            }
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                }
                <div className="container">
                    <div className="p-3">
                        <div className="d-flex align-items-center justify-content-between w-100" style={{ flexWrap: 'wrap' }}>
                            <div className={styles.media}>
                                <i className={styles.icon}>
                                    <img src={data.company.logoimage} alt="facebook"/>
                                </i>
                                <div className={styles.body}>
                                    <h2 className={styles.heading}>{data.job.title}</h2>
                                    <span className={styles.action}>at {data.company.name} ({data.job.skillids.filter(id => user?.data?.skillids.includes(id)).length}/{data.job.skillids.length} skills matched)</span>
                                </div>
                            </div>
                            <ul className={`d-flex align-items-center ${styles.btns}`}>
                                <li>
                                    <button className={styles.saveBtn}>
                                        <img src={Bookmark} alt="bookmark"/>
                                    </button>
                                </li>
                                <li>
                                    <button className={`${styles.btn} ${applied ? 'disabled' : ""}`} onClick={() => {
                                        if (!user?.data) {
                                            navigate("/signin");
                                        }
                                        setShowModal(true);
                                    }} disabled={applied}>
                                        {
                                            applied ?
                                            "Applied"
                                            :
                                            <>
                                            Apply now
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                            </svg>
                                            </>
                                        }
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="content" dangerouslySetInnerHTML={{ __html: data.job.jobdescription }}>
                            
                        </div>
                        <div className={styles.topBx}>
                            <div className={styles.col}>
                                <div className="p-2">
                                    <h6 className={`${styles.bxHeading} text-center`}>Salary (INR)</h6>
                                    <p className={styles.salary}>{data.job.minsalary} - {data.job.maxsalary}</p>
                                    <p className={`${styles.action} text-center`}>Yearly salary</p>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className="p-2 d-flex justify-content-center flex-column align-items-center">
                                    <i className={styles.add}>
                                        <img src={Add} alt="address"/>
                                    </i>
                                    <p className={`${styles.bxHeading} mb-0`}>Job Location</p>
                                    <p className={`${styles.bxHeading} ${styles.location} mb-0`}>{data.job.location.city}, {data.job.location.country}</p>
                                </div>
                            </div>
                        </div>
                        {/* <h4 className={styles.bxHeading}>Job Description</h4> */}
                        <Row>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <p className={styles.action}>Job Posted:</p>
                                <p className={styles.fs2}>{getDate(data.job.createdAt)}</p>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <p className={styles.action}>Job Expire:</p>
                                <p className={styles.fs2}>{getDate(data.job.jobexpiry)}</p>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <p className={styles.action}>Job Level:</p>
                                <p className={styles.fs2}>{data.job.joblevel}</p>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <p className={styles.action}>Experience:</p>
                                <p className={styles.fs2}>{data.job.minexperience}-{data.job.maxexperience}</p>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <p className={styles.action}>Education:</p>
                                <p className={styles.fs2}>{data.job.education}</p>
                            </Col>
                            <Col lg={4} md={6} sm={6} xs={6}>
                                <p className={styles.action}>Job Type:</p>
                                <p className={styles.fs2} style={{ textTransform: 'uppercase' }}>{data.job.jobtype}</p>
                            </Col>
                        </Row>
                    </div>
                </div>
                </>
                :
                <div className="container">
                    <h1>Opps, Job details not found</h1>
                </div>
            }
        </>
    )
}

export default JobDetails
