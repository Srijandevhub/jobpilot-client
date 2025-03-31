import { Col, Container, Row } from 'react-bootstrap'
import styles from './HomeHero.module.css'
import Illustration from '../../assets/Illustration.svg'
import Search from '../../assets/fi_search.svg'
import MapPin from '../../assets/fi_map-pin.svg'
import Icon1 from '../../assets/briefcase.svg'
import Icon2 from '../../assets/buildings.svg'
import Icon3 from '../../assets/users.svg'

const HomeHero = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heading}>Find a job that suits<br/> your interest & skills.</h1>
                            <p className={styles.text}>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam <br/> in scelerisque leo, eget sollicitudin velit bestibulum.</p>
                            <div className={styles.searchBx}>
                                <div className={styles.col}>
                                    <div className={styles.row}>
                                        <div className={styles.textCol}>
                                            <i className={styles.icon}><img src={Search} alt='search'/></i>
                                            <input type='text' className={styles.control} placeholder='Job tittle, Keyword...'/>
                                        </div>
                                        <div className={styles.locationCol}>
                                            <i className={styles.icon}><img src={MapPin} alt='search'/></i>
                                            <input type='text' className={styles.control} placeholder='Your Location'/>
                                        </div>
                                    </div>
                                </div>
                                <button className={styles.btn}>Find Job</button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className='d-flex justify-content-end'>
                            <img src={Illustration} alt='hero' className={styles.heroImage}/>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.counterRow}>
                    <Col lg={3}>
                        <div className={styles.bx}>
                            <i className={styles.mediaIcon}>
                                <img src={Icon1} alt='briefcase'/>
                            </i>
                            <div className={styles.mediaBody}>
                                <p className={styles.counter}>1,75,324</p>
                                <span className={styles.mediaAction}>Live Job</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.bx}>
                            <i className={styles.mediaIcon}>
                                <img src={Icon2} alt='building'/>
                            </i>
                            <div className={styles.mediaBody}>
                                <p className={styles.counter}>97,354</p>
                                <span className={styles.mediaAction}>Companies</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.bx}>
                            <i className={styles.mediaIcon}>
                                <img src={Icon3} alt='users'/>
                            </i>
                            <div className={styles.mediaBody}>
                                <p className={styles.counter}>38,47,154</p>
                                <span className={styles.mediaAction}>Candidates</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.bx}>
                            <i className={styles.mediaIcon}>
                                <img src={Icon1} alt='briefcase'/>
                            </i>
                            <div className={styles.mediaBody}>
                                <p className={styles.counter}>7,532</p>
                                <span className={styles.mediaAction}>New Jobs</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeHero