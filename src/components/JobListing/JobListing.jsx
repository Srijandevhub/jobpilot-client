import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import styles from './JobListing.module.css'
import Search from '../../assets/fi_search.svg'
import MapPin from '../../assets/fi_map-pin.svg'
import { useState } from 'react'
import JobBox from '../JobBox/JobBox'

const JobListing = () => {
    const [showFilters, setShowFilters] = useState(false);
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.filterBx}>
                    <div className={styles.filter1}>
                        <i className={styles.icon}><img src={Search} alt='search'/></i>
                        <input type='text' className={styles.control} placeholder='Job tittle, Keyword...'/>
                    </div>
                    <div className={styles.filter2}>
                        <i className={styles.icon}><img src={MapPin} alt='search'/></i>
                        <input type='text' className={styles.control} placeholder='Your Location'/>
                    </div>
                    <div className={styles.filter3}>
                        <div className={`d-flex align-items-center justify-content-end p-2 flex-wrap`}>
                            <button className={`${styles.btn2} ${showFilters ? `${styles.active}` : ''}`} onClick={() => setShowFilters(!showFilters)}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z"/>
                                </svg>
                                Filter
                            </button>
                            <button className={styles.btn}>Find Job</button>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col md={6} xl={4}>
                        <JobBox />
                    </Col>
                    <Col md={6} xl={4}>
                        <JobBox />
                    </Col>
                    <Col md={6} xl={4}>
                        <JobBox />
                    </Col>
                    <Col md={6} xl={4}>
                        <JobBox />
                    </Col>
                </Row>
            </Container>
            <aside className={`position-fixed top-0 ${styles.filterWrapper} ${showFilters ? `${styles.active}` : ''}`}>
                <Card className='vh-100 rounded-0'>
                    <CardHeader>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h5 className={`${styles.heading} mb-0`}>Filter</h5>
                            <button aria-label='close' className={styles.close} onClick={() => setShowFilters(false)}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                </svg>
                            </button>
                        </div>
                    </CardHeader>
                    <CardBody className='overflow-auto'>
                        <h6 className={styles.hd}>Industry</h6>
                        <h6 className={styles.hd}>Job Type</h6>
                        <h6 className={styles.hd}>Salary</h6>
                    </CardBody>
                    <CardFooter>
                        <button className={`w-100 ${styles.btn} m-0`}>Apply Filter</button>
                    </CardFooter>
                </Card>
            </aside>
        </div>
    )
}

export default JobListing
