import { Col, Container, Row } from 'react-bootstrap'
import styles from './CompanyListing.module.css'
import Search from '../../assets/fi_search.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../url'
import CompanyBox from '../CompanyBox/CompanyBox'

const CompanyListing = () => {
    const [query, setQuery] = useState("");
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/public/companies`);
                setCompanies(res.data.companies);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    }, [])
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.filterBx}>
                    <div className={styles.filter1}>
                        <i className={styles.icon}><img src={Search} alt='search'/></i>
                        <input type='text' className={styles.control} placeholder='Comapny Name...' value={query} onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                    <div className={styles.filter3}>
                        <div className={`d-flex align-items-center justify-content-end p-2 flex-wrap`}>
                            <button className={styles.btn} onClick={() => {
                                
                            }}>Find Company</button>
                        </div>
                    </div>
                </div>
                <Row>
                    {
                        companies.map((item, index) => {
                            return (
                                <Col lg={4} key={index}>
                                    <CompanyBox id={item._id} logo={item.logoimage} name={item.name} position={item.position}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default CompanyListing