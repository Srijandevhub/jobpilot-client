import { Col, Container, Row } from "react-bootstrap"
import Facebook from '../../assets/facebook.svg'
import styles from './JobDetails.module.css'
import Bookmark from '../../assets/bookmarkblue.svg'
import Add from '../../assets/add.svg'
import { useEffect, useState } from "react"

const JobDetails = () => {
    const [fixed, setFixed] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
        {
            fixed &&
            <div className={`p-3 ${styles.fixed} bg-light-subtle shadow`}>
                <Container>
                    <div className="d-flex align-items-center justify-content-between w-100" style={{ flexWrap: 'wrap' }}>
                        <div className={styles.media}>
                            <i className={styles.icon}>
                                <img src={Facebook} alt="facebook"/>
                            </i>
                            <div className={styles.body}>
                                <h2 className={styles.heading}>Senior UX Designer</h2>
                                <span className={styles.action}>at Facebook</span>
                            </div>
                        </div>
                        <ul className={`d-flex align-items-center ${styles.btns}`}>
                            <li>
                                <button className={styles.saveBtn}>
                                    <img src={Bookmark} alt="bookmark"/>
                                </button>
                            </li>
                            <li>
                                <button className={styles.btn}>
                                    Apply now
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                    </svg>
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
                            <img src={Facebook} alt="facebook"/>
                        </i>
                        <div className={styles.body}>
                            <h2 className={styles.heading}>Senior UX Designer</h2>
                            <span className={styles.action}>at Facebook</span>
                        </div>
                    </div>
                    <ul className={`d-flex align-items-center ${styles.btns}`}>
                        <li>
                            <button className={styles.saveBtn}>
                                <img src={Bookmark} alt="bookmark"/>
                            </button>
                        </li>
                        <li>
                            <button className={styles.btn}>
                                Apply now
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-3">
                <div className="content">
                    <h4>Job Description</h4>
                    <p>Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!</p>
                    <p>Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.</p>
                    <p>The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform</p>
                    <p>Want to work with us? You're in good company!</p>
                    <h4>Requirements</h4>
                    <ul>
                        <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
                        <li>3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications</li>
                        <li>Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel</li>
                        <li>Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)</li>
                        <li>Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.</li>
                        <li>Familiarity with version control and project management systems (e.g., Github, Jira)</li>
                        <li>Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on</li>
                        <li>Ambitious and hungry to grow your career in a fast-growing agency</li>
                    </ul>
                    <h4>Desirable:</h4>
                    <ul>
                        <li>Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.</li>
                        <li>Working knowledge of payment gateways</li>
                        <li>API platform experience / Building restful APIs</li>
                    </ul>
                    <h4>Benefits</h4>
                    <ul>
                        <li>Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar)</li>
                        <li>28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday</li>
                        <li>Generous annual bonus.</li>
                        <li>Healthcare package</li>
                        <li>Paid community days to volunteer for a charity of your choice</li>
                        <li>£100 contribution for your own personal learning and development</li>
                        <li>Free Breakfast on Mondays and free snacks in the office</li>
                        <li>Access to Perkbox with numerous discounts plus free points from the company to spend as you wish.
                        Cycle 2 Work Scheme</li>
                        <li>Brand new MacBook Pro</li>
                        <li>Joining an agency on the cusp of exponential growth and being part of this exciting story.</li>
                    </ul>
                </div>
                <div className={styles.topBx}>
                    <div className={styles.col}>
                        <div className="p-2">
                            <h6 className={`${styles.bxHeading} text-center`}>Salary (USD)</h6>
                            <p className={styles.salary}>$100,000 - $120,000</p>
                            <p className={`${styles.action} text-center`}>Yearly salary</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className="p-2 d-flex justify-content-center flex-column align-items-center">
                            <i className={styles.add}>
                                <img src={Add} alt="address"/>
                            </i>
                            <p className={`${styles.bxHeading} mb-0`}>Job Location</p>
                            <p className={`${styles.bxHeading} ${styles.location} mb-0`}>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                {/* <h4 className={styles.bxHeading}>Job Description</h4> */}
                <Row>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <p className={styles.action}>Job Posted:</p>
                        <p className={styles.fs2}>14 Jun, 2021</p>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <p className={styles.action}>Job Expire:</p>
                        <p className={styles.fs2}>14 Jun, 2021</p>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <p className={styles.action}>Job Level:</p>
                        <p className={styles.fs2}>Entry</p>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <p className={styles.action}>Experience:</p>
                        <p className={styles.fs2}>1-6</p>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <p className={styles.action}>Education:</p>
                        <p className={styles.fs2}>Graduation</p>
                    </Col>
                    <Col lg={4} md={6} sm={6} xs={6}>
                        <p className={styles.action}>Job Type:</p>
                        <p className={styles.fs2}>Full Time</p>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default JobDetails
