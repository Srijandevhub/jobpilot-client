import { Col, Container, Row } from 'react-bootstrap'
import styles from './PopularVacancies.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../url'

const PopularVacancies = () => {
    const [vacancies, setVacancies] = useState([]);
    useEffect(() => {
        const fetchJobRole = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/public/jobroles`);
                setVacancies(res.data.jobroles);
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobRole();
    }, [])
    return (
        <div className={styles.wrapper}>
            <Container>
                <h2 className='page-heading'>Most Popular Vacancies</h2>
                <Row>
                    {
                        vacancies.map((item, index) => {
                            return (
                                <Col xl={3} md={4} sm={6} key={index}>
                                    <div className={styles.bx}>
                                        <Link to={`/`} className={styles.link}>{item.title}</Link>
                                        <span className={styles.action}>{item.openings} Open Positions</span>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default PopularVacancies
