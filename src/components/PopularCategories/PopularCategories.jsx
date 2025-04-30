import { Col, Container, Row } from 'react-bootstrap'
import styles from './PopularCategories.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../url'

const PopularCategories = () => {
    const [categories, setCategores] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/public/categories`);
                setCategores(res.data.categories);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategories();
    }, [])
    return (
        <div className={styles.wrapper}>
            <Container>
                <h2 className='page-heading'>Popular category</h2>
                <Row>
                    {
                        categories.map((item, index) => {
                            return (
                                <Col xxl={3} xl={4} lg={4} md={6} key={index}>
                                    <div className={styles.bx}>
                                        <i className={styles.icon}>
                                            <img src={item.icon} alt='pin'/>
                                        </i>
                                        <div className={styles.text}>
                                            <h4 className={styles.title}>{item.title}</h4>
                                            <span className={styles.action}>{item.openings} Open position</span>
                                        </div>
                                        <Link to={`/find-job?category=${item._id}`} className={styles.link}></Link>
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

export default PopularCategories
