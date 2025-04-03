import { Col, Container, Row } from 'react-bootstrap'
import styles from './PopularCategories.module.css'
import Pin from '../../assets/pen-nib.svg'
import { Link } from 'react-router-dom'

const PopularCategories = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <h2 className='page-heading'>Popular category</h2>
                <Row>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                    <Col xxl={3} xl={4} lg={4} md={6}>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Pin} alt='pin'/>
                            </i>
                            <div className={styles.text}>
                                <h4 className={styles.title}>Graphics & Design</h4>
                                <span className={styles.action}>357 Open position</span>
                            </div>
                            <Link to="#" className={styles.link}></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PopularCategories