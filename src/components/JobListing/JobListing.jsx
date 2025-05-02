import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'react-bootstrap'
import styles from './JobListing.module.css'
import Search from '../../assets/fi_search.svg'
import MapPin from '../../assets/fi_map-pin.svg'
import { useEffect, useState } from 'react'
import JobBox from '../JobBox/JobBox'
import axios from 'axios'
import { baseUrl } from '../../url'
import { useSearchParams } from 'react-router-dom'

const JobListing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const categoryids = searchParams.get("category");
    // const jobroleids = searchParams.get("jobrole");
    // const updateCategoryQuery = (id) => {
    //     const currentParams = Object.fromEntries([...searchParams]);
    //     let allcategories = categoryids ? categoryids.split(",") : [];
    //     const idpresent = allcategories.includes(id);
    //     if (!idpresent) {
    //         allcategories.push(id);
    //     } else {
    //         const updated = allcategories.filter(item => item !== id);
    //         allcategories.length = 0;
    //         Array.prototype.push.apply(allcategories, updated);
    //     }
    //     setSearchParams({ ...currentParams, category: allcategories.join(",") });
    // }
    // const updateJobroleQuery = (id) => {
    //     const currentParams = Object.fromEntries([...searchParams]);
    //     let alljobroles = jobroleids ? jobroleids.split(",") : [];
    //     const idpresent = alljobroles.includes(id);
    //     if (!idpresent) {
    //         alljobroles.push(id);
    //     } else {
    //         const updated = alljobroles.filter(item => item !== id);
    //         alljobroles.length = 0;
    //         Array.prototype.push.apply(alljobroles, updated);
    //     }
    //     setSearchParams({ ...currentParams, jobrole: alljobroles.join(",") });
    // }

    const [showFilters, setShowFilters] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [jobroles, setJobroles] = useState([]);
    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         try {
    //             const res = await axios.get(`${baseUrl}/api/v1/public/jobs`, {
    //                 params: {
    //                     category: categoryids,
    //                     jobrole: jobroleids
    //                 }
    //             });
    //             setJobs(res.data.jobs);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchJobs();
    // }, [categoryids, jobroleids])
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/filter/categories`);
                setCategories(res.data.categories);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategories();
        const fetchJobroles = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/filter/jobroles`);
                setJobroles(res.data.jobroles);
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobroles();
    }, [])



    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedJobRoles, setSelectedJobRoles] = useState([]);
    useEffect(() => {
        const categoryFromParams = searchParams.get("category")?.split(",") || [];
        const jobRolesFromParams = searchParams.get("jobrole")?.split(",") || [];
        const queryFromParams = searchParams.get("q") || '';
        setSelectedCategories(categoryFromParams);
        setSelectedJobRoles(jobRolesFromParams);
        setQuery(queryFromParams);
    }, [])
    const toggleCategory = (id) => {
        setSelectedCategories(prev =>
            prev.includes(id) ? prev.filter(cid => cid !== id) : [...prev, id]
        );
    };
    const toggleJobrole = (id) => {
        setSelectedJobRoles(prev =>
            prev.includes(id) ? prev.filter(jid => jid !== id) : [...prev, id]
        );
    };

    const [query, setQuery] = useState("");

    useEffect(() => {
        const categoryids = searchParams.get("category");
        const jobroleids = searchParams.get("jobrole");
        const queryParam = searchParams.get("q");
        const fetchJobs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/public/jobs`, {
                    params: {
                        category: categoryids,
                        jobrole: jobroleids,
                        query: queryParam
                    }
                });
                setJobs(res.data.jobs);
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs();
    }, [searchParams])

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.filterBx}>
                    <div className={styles.filter1}>
                        <i className={styles.icon}><img src={Search} alt='search'/></i>
                        <input type='text' className={styles.control} placeholder='Job tittle, Keyword...' value={query} onChange={(e) => setQuery(e.target.value)}/>
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
                            <button className={styles.btn} onClick={() => {
                                const currentParams = Object.fromEntries([...searchParams]);
                                if (query.length > 0) {
                                    currentParams.q = query;
                                } else {
                                    delete currentParams.q;
                                }
                                setSearchParams(currentParams);
                            }}>Find Job</button>
                        </div>
                    </div>
                </div>
                <Row>
                    {
                        jobs.map((item, index) => {
                            return (
                                <Col md={6} xl={4} key={index}>
                                    <JobBox title={item.title} jobtype={item.jobtype} minsal={item.minsalary} maxsal={item.maxsalary} companyLogo={item.company.logoimage} companyName={item.company.name} city={item.location.city} country={item.location.country} id={item._id}/>
                                </Col>
                            )
                        })
                    }
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
                        <h6 className={styles.hd}>Categories</h6>
                        {
                            categories.map((item, index) => {
                                return <button className={`${styles.filterBtn} ${selectedCategories?.includes(item._id) ? `${styles.active}` : ''}`} onClick={() => toggleCategory(item._id)} key={index}>{item.title}</button>
                            })
                        }
                        <h6 className={styles.hd}>Job Roles</h6>
                        {
                            jobroles.map((item, index) => {
                                return <button className={`${styles.filterBtn} ${selectedJobRoles?.includes(item._id) ? `${styles.active}` : ''}`} key={index} onClick={() => toggleJobrole(item._id)}>{item.title}</button>
                            })
                        }
                    </CardBody>
                    <CardFooter>
                        <button className={`w-100 ${styles.btn} m-0`} onClick={() => {
                            const currentParams = Object.fromEntries([...searchParams]);
                            if (selectedCategories.length > 0) {
                                currentParams.category = selectedCategories.join(",");
                            } else {
                                delete currentParams.category;
                            }
                            if (selectedJobRoles.length > 0) {
                                currentParams.jobrole = selectedJobRoles.join(",");
                            } else {
                                delete currentParams.jobrole;
                            }
                            setSearchParams(currentParams);
                            setShowFilters(false);
                        }}>Apply Filter</button>
                    </CardFooter>
                </Card>
            </aside>
        </div>
    )
}

export default JobListing
