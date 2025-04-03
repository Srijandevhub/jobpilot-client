import { Col, Container, Row } from 'react-bootstrap'
import styles from './PopularVacancies.module.css'
import { Link } from 'react-router-dom'

const PopularVacancies = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <h2 className='page-heading'>Most Popular Vacancies</h2>
                <Row>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Anesthesiologists</Link>
                            <span className={styles.action}>45,904 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Surgeons</Link>
                            <span className={styles.action}>50,364 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Obstetricians-Gynecologists</Link>
                            <span className={styles.action}>4,339 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Orthodontists</Link>
                            <span className={styles.action}>20,079 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Maxillofacial Surgeons</Link>
                            <span className={styles.action}>74,875 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Software Developer</Link>
                            <span className={styles.action}>43359 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Psychiatrists</Link>
                            <span className={styles.action}>18,599 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Data Scientist</Link>
                            <span className={styles.action}>28,200 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Financial Manager</Link>
                            <span className={styles.action}>61,391 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Management Analysis</Link>
                            <span className={styles.action}>93,046 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>IT Manager</Link>
                            <span className={styles.action}>50,963 Open Positions</span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} sm={6}>
                        <div className={styles.bx}>
                            <Link to="/" className={styles.link}>Operations Research Analysis</Link>
                            <span className={styles.action}>16,627 Open Positions</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PopularVacancies
