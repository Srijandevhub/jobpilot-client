import { Col, Container, Row } from 'react-bootstrap'
import styles from './HowWork.module.css'
import Icon1 from '../../assets/user-plus.svg'
import Icon2 from '../../assets/cloud-arrow-up.svg'
import Icon3 from '../../assets/magnifying-glass-plus.svg'
import Icon4 from '../../assets/circle-wavy-check.svg'
import Arrw1 from '../../assets/Arrows-up.svg'
import Arrw2 from '../../assets/Arrows-down.svg'

const HowWork = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <h2 className='page-heading text-center'>How jobpilot work</h2>
                <Row>
                    <Col lg={3} md={6}>
                        <div className={styles.bx}>
                            <span className={styles.arrw}>
                                <img src={Arrw1} alt='arrw'/>
                            </span>
                            <i className={styles.icon}>
                                <img src={Icon1} alt='user'/>
                            </i>
                            <h3 className={styles.heading}>Create account</h3>
                            <p className={styles.text}>Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className={styles.bx}>
                            <span className={`${styles.arrw2} ${styles.sArr}`}>
                                <img src={Arrw2} alt='arrw'/>
                            </span>
                            <i className={styles.icon}>
                                <img src={Icon2} alt='user'/>
                            </i>
                            <h3 className={styles.heading}>Upload CV/Resume</h3>
                            <p className={styles.text}>Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='order-md-4 order-lg-3'>
                        <div className={styles.bx}>
                            <span className={`${styles.arrw} ${styles.tArr}`}>
                                <img src={Arrw1} alt='arrw'/>
                            </span>
                            <i className={styles.icon}>
                                <img src={Icon3} alt='user'/>
                            </i>
                            <h3 className={styles.heading}>Find suitable job</h3>
                            <p className={styles.text}>Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='order-md-3 order-lg-4'>
                        <div className={styles.bx}>
                            <i className={styles.icon}>
                                <img src={Icon4} alt='user'/>
                            </i>
                            <h3 className={styles.heading}>Apply job</h3>
                            <p className={styles.text}>Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowWork
