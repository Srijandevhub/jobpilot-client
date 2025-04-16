import { Card, CardBody, CardFooter, CardHeader, Container } from 'react-bootstrap'
import styles from './MainHeader.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/fi_search.svg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../utils/userSlice'

const MainHeader = ({ menuActive = 'home', panel = false }) => {
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <>
        <header className={`${styles.header}`}>
            <div className={styles.headerTop}>
                <Container>
                    <div className='d-flex align-items-center justify-content-between'>
                        <ul className={styles.headerMenu}>
                            <li>
                                <Link to="/" className={`${styles.headerLink} ${menuActive === 'home' ? `${styles.active}` : ''}`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/find-job" className={`${styles.headerLink} ${menuActive === 'findjob' ? `${styles.active}` : ''}`}>Find Job</Link>
                            </li>
                            <li>
                                <Link to="/explore-companies" className={`${styles.headerLink} ${menuActive === 'explorecompanies' ? `${styles.active}` : ''}`}>Explore Companies</Link>
                            </li>
                            {/* this part for super admin and company admins and recruiters */}
                            {
                                user.isAuthenticated &&
                                <li>
                                    <Link to="/dashboard/overview" className={`${styles.headerLink} ${menuActive === 'dashboard' ? `${styles.active}` : ''}`}>Dashboard</Link>
                                </li>
                            }
                        </ul>
                        {
                            user.isAuthenticated &&
                            <button className={styles.headerLink} onClick={() => dispatch(logoutUser())}>Logout</button>
                        }
                    </div>
                </Container>
            </div>
            <div className={styles.headerMain}>
                <Container>
                    <nav className='d-flex align-items-center py-3 justify-content-between'>
                        <span className={styles.brand}>
                            <img src={Logo} alt='logo'/>
                        </span>
                        {
                            !panel &&
                            <div className={styles.search}>
                                <div className='position-relative'>
                                    <i className={styles.searchIcon}>
                                        <img src={Search} alt='search'/>
                                    </i>
                                    <input type='text' className={styles.input} id='searchjob' placeholder='Job tittle, keyword, company'/>
                                </div>
                            </div>
                        }
                        <div className={`flex-grow-1 ${styles.btnholder}`}>
                            {
                                user.isAuthenticated ?
                                <div className='d-flex justify-content-end'>
                                    <div>
                                        <p className={styles.welcome}>Welcome</p>
                                        <h6 className={styles.username}>{user.data.fullname}</h6>
                                    </div>
                                </div>
                                :
                                <div className='d-flex justify-content-end gap-1'>
                                    <Link to="/signin" className={styles.btn}>Sign In</Link>
                                    <Link to="/register" className={`${styles.btn} ${styles.btn2}`}>Register</Link>
                                </div>
                            }
                        </div>
                        <button className={styles.navbarToogler} aria-label='toogler' onClick={() => setShowMenu(true)}>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </button>
                    </nav>
                </Container>
            </div>
            <aside className={`${styles.mobileNav} ${showMenu ? `${styles.show}` : ''} shadow border-right`}>
                <Card className='vh-100 rounded-0 border-0'>
                    <CardHeader>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className={styles.brand} style={{ width: '80px' }}>
                                <img src={Logo} alt='logo'/>
                            </span>
                            <button className={styles.closeBtn} aria-label='close' onClick={() => setShowMenu(false)}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                </svg>
                            </button>
                        </div>
                    </CardHeader>
                    <CardBody className='overflow-auto'>
                        <ul className={styles.headerMenu}>
                            <li>
                                <Link to="/" className={`${styles.headerLink} ${menuActive === 'home' ? `${styles.active}` : ''}`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/find-job" className={`${styles.headerLink} ${menuActive === 'findjob' ? `${styles.active}` : ''}`}>Find Job</Link>
                            </li>
                            <li>
                                <Link to="/explore-companies" className={`${styles.headerLink} ${menuActive === 'explorecompanies' ? `${styles.active}` : ''}`}>Explore Companies</Link>
                            </li>
                            {
                                user.isAuthenticated &&
                                <li>
                                    <Link to="/dashboard/overview" className={`${styles.headerLink} ${menuActive === 'dashboard' ? `${styles.active}` : ''}`}>Dashboard</Link>
                                </li>
                            }
                        </ul>
                    </CardBody>
                    <CardFooter>
                        {
                            user.isAuthenticated ?
                            <>
                            <p className={styles.welcome}>Welcome</p>
                            <h6 className={styles.username}>{user.data.fullname}</h6>
                            <button className='btn btn-danger w-100 mt-2' onClick={() => dispatch(logoutUser())}>Logout</button>
                            </>
                            :
                            <>
                            <Link to="/login" className={`${styles.btn} w-100 mb-1`}>
                                Sign In
                            </Link>
                            <Link to="/register" className={`${styles.btn} ${styles.btn2} w-100`}>Register</Link>
                            </>
                        }
                    </CardFooter>
                </Card>
            </aside>
        </header>
        </>
    )
}

export default MainHeader
