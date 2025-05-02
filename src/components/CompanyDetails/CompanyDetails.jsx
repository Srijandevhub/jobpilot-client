import { useEffect, useState } from 'react'
import styles from './CompanyDetails.module.css'
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../url';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import JobBox from '../JobBox/JobBox';

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]
const CompanyDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/public/company/${id}`);
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanyDetails();
    }, [])
    const getDate = (input) => {
        if (!input) {
            return "";
        }
        const curr = new Date(input);
        const month = curr.getMonth();
        const year = curr.getFullYear();
        const date = String(curr.getDate()).padStart(2, '0');
        return `${date} ${months[month]}, ${year}`;
    }
    return (
        <>
        {
            data ? 
            <>
            <div className={styles.cover}>
                <img src={data?.company?.coverimage} alt="cover"/>
            </div>
            <div className='container'>
                <div className="p-3 shadow position-relative" style={{ marginTop: '-45px', background: '#fff', borderRadius: '10px' }}>
                    <div className="d-flex align-items-center justify-content-between w-100" style={{ flexWrap: 'wrap' }}>
                        <div className={styles.media}>
                            <i className={styles.icon}>
                                <img src={data?.company?.logoimage} alt="facebook"/>
                            </i>
                            <div className={styles.body}>
                                <h2 className={styles.heading}>{data?.company?.name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-5'>
                    <div className="content" dangerouslySetInnerHTML={{ __html: data?.company?.description }}></div>
                    <Row className='mt-5'>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <p className={styles.action}>Founded In:</p>
                            <p className={styles.fs2}>{getDate(data?.company?.foundedin)}</p>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <p className={styles.action}>Organisation Type:</p>
                            <p className={styles.fs2}>{data?.company?.organisationtype}</p>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <p className={styles.action}>Team Size:</p>
                            <p className={styles.fs2}>{data?.company?.teamsize}</p>
                        </Col>
                        <Col lg={4} md={6} sm={6} xs={6}>
                            <p className={styles.action}>Industry Type:</p>
                            <p className={styles.fs2}>{data?.industrytype?.title}</p>
                        </Col>
                    </Row>
                    <h4 className={styles.heading}>Current Openings</h4>
                    <Row className='mt-2'>
                        {
                            data?.jobs?.map((item, index) => {
                                return (
                                    <Col md={6} xl={4} key={index}>
                                        <JobBox title={item.title} jobtype={item.jobtype} minsal={item.minsalary} maxsal={item.maxsalary} companyLogo={data.company.logoimage} companyName={data.company.name} city={item.location.city} country={item.location.country} id={item._id}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
            </>
            :
            <div className="container">
                <h1>Opps, Job details not found</h1>
            </div>
        }
        </>
    )
}

export default CompanyDetails