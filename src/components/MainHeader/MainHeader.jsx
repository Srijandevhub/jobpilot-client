import { Container } from 'react-bootstrap'
import styles from './MainHeader.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/fi_search.svg'

const MainHeader = ({ menuActive = 'home' }) => {
    return (
        <header className={`${styles.header}`}>
            <div className={styles.headerTop}>
                <Container>
                    <ul className={styles.headerMenu}>
                        <li>
                            <Link to="/" className={`${styles.headerLink} ${menuActive === 'home' ? `${styles.active}` : ''}`}>Home</Link>
                        </li>
                        <li>
                            <Link to="/find-jobs" className={`${styles.headerLink} ${menuActive === 'findjob' ? `${styles.active}` : ''}`}>Find Job</Link>
                        </li>
                        <li>
                            <Link to="/explore-companies" className={`${styles.headerLink} ${menuActive === 'explorecompanies' ? `${styles.active}` : ''}`}>Explore Companies</Link>
                        </li>
                    </ul>
                </Container>
            </div>
            <div className={styles.headerMain}>
                <Container>
                    <nav className='d-flex align-items-center py-3'>
                        <span className={styles.brand}>
                            <img src={Logo} alt='logo'/>
                        </span>
                        <div className={styles.search}>
                            <div className='position-relative'>
                                <i className={styles.searchIcon}>
                                    <img src={Search} alt='search'/>
                                </i>
                                <input type='text' className={styles.input} id='searchjob' placeholder='Job tittle, keyword, company'/>
                            </div>
                        </div>
                        <div className={`flex-grow-1 ${styles.btnholder}`}>
                            <div className='d-flex justify-content-end'>
                                <button className={styles.btn}>Sign In</button>
                            </div>
                        </div>
                    </nav>
                </Container>
            </div>
        </header>
    )
}

export default MainHeader