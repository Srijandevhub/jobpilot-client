import { Col, Container, Row } from 'react-bootstrap'
import styles from './CompanyListing.module.css'
import Search from '../../assets/fi_search.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../url'
import CompanyBox from '../CompanyBox/CompanyBox'
import { useSearchParams } from 'react-router-dom'

const CompanyListing = () => {
    const [query, setQuery] = useState("");
    const [companies, setCompanies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        const queryParam = searchParams.get("q");
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/public/companies`, {
                    params: {
                        query: queryParam
                    }
                });
                setCompanies(res.data.companies);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    }, [searchParams])
    useEffect(() => {
        const queryParam = searchParams.get("q") || "";
        setQuery(queryParam);
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
                                const currentParams = Object.fromEntries([...searchParams]);
                                if (query.length > 0) {
                                    currentParams.q = query;
                                } else {
                                    delete currentParams.q;
                                }
                                setSearchParams(currentParams);
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
