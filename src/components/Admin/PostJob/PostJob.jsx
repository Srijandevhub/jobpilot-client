import { Col, FormControl, FormGroup, FormLabel, FormSelect, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'react-bootstrap'
import styles from './PostJob.module.css'
import { useEffect, useState } from 'react'
import { Flip, toast } from 'react-toastify';
import axios from 'axios';
import { baseUrl } from '../../../url';

const PostJob = () => {
    const [title, setTitle] = useState("");
    const [jobtype, setJobType] = useState("none");
    const [minsalary, setMinsalary] = useState("");
    const [maxsalary, setMaxsalary] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [jobexpiry, setjobexpiry] = useState("");
    const [joblevel, setJoblevel] = useState("");
    const [minexperience, setMinexperience] = useState("");
    const [maxexperience, setMaxexperience] = useState("");
    const [education, setEducation] = useState("");
    const [jobdescription, setJobdescription] = useState("");
    const [jobrole, setJobRole] = useState("none");
    const [category, setCategory] = useState("none");
    const handleSaveJob = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/v1/job`, {
                title,
                jobtype,
                minsalary,
                maxsalary,
                city,
                country,
                jobexpiry,
                joblevel,
                minexperience,
                maxexperience,
                education,
                jobdescription,
                categoryid: category,
                jobroleid: jobrole,
                skillids: JSON.stringify(selectedSkills)
            }, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip,
                hideProgressBar: true
            });
        } catch (error) {
            if (error.status === 400) {
                toast.warn(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                })
            } else if (error.status === 500) {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                })
            }
        }
    }

    const [refresh, setRefresh] = useState(false);
    const [jobroles, setJobroles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [titleJR, setTitleJR] = useState("");
    const handleAddJobRole = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/v1/jobrole`, {
                title: titleJR
            }, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip,
                hideProgressBar: true
            });
            setRefresh(!refresh);
        } catch (error) {
            if (error.status === 400) {
                toast.warn(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                })
            } else if (error.status === 500) {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                })
            }
        } finally {
            setShowModal(false);
            setTitleJR("");
        }
    }
    useEffect(() => {
        const fetchJobroles = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/jobrole`, { withCredentials: true });
                setJobroles(res.data.jobroles);
            } catch (error) {
                if (error.status === 400) {
                    toast.warn(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    })
                } else if (error.status === 500) {
                    toast.error(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    })
                } 
            }
        }
        fetchJobroles();
    }, [refresh])

    const handleAddCategory = async () => {
        try {
            const formData = new FormData();
            formData.append("title", titleCat);
            formData.append("icon", icon);
            const res = await axios.post(`${baseUrl}/api/v1/category`, formData, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip,
                hideProgressBar: true
            });
            setRefresh2(!refresh2);
        } catch (error) {
            if (error.status === 400) {
                toast.warn(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                })
            } else if (error.status === 500) {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                })
            }
        } finally {
            setShowModal2(false);
            setTitleCat("");
            setIcon(null);
        }
    }
    const [refresh2, setRefresh2] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showModal2, setShowModal2] = useState(false);
    const [titleCat, setTitleCat] = useState("");
    const [icon, setIcon] = useState(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/category`, { withCredentials: true });
                setCategories(res.data.categories);
            } catch (error) {
                if (error.status === 400) {
                    toast.warn(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    })
                } else if (error.status === 500) {
                    toast.error(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    })
                } 
            }
        }
        fetchCategories();
    }, [refresh2])

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/skill`, { withCredentials: true });
                setSkills(res.data.skills);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSkills();
    }, [])

    const [selectedSkills, setSelectedSkills] = useState([]);

    return (
        <>
            <h1 className='panel-heading'>Post Job</h1>
            <Row>
                <Col xs={12}>
                    <FormGroup>
                        <FormLabel htmlFor='title'>Job Title*</FormLabel>
                        <FormControl id='title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col sm={10}>
                            <label className="form-label">Job Role</label>
                            <select className="form-select" value={jobrole} onChange={(e) => setJobRole(e.target.value)}>
                                <option value="none">--Select--</option>
                                {
                                    jobroles.map((item, index) => {
                                        return <option value={item._id} key={index}>{item.title}</option>
                                    })
                                }
                            </select>
                        </Col>
                        <Col sm={2}>
                            <label className="form-label opacity-0">Category</label>
                            <button className="btn btn-primary w-100" onClick={() => setShowModal(true)}>New</button>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col sm={10}>
                            <label className="form-label">Category</label>
                            <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="none">--Select--</option>
                                {
                                    categories.map((item, index) => {
                                        return <option value={item._id} key={index}>{item.title}</option>
                                    })
                                }
                            </select>
                        </Col>
                        <Col sm={2}>
                            <label className="form-label opacity-0">Category</label>
                            <button className="btn btn-primary w-100" onClick={() => setShowModal2(true)}>New</button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <h2 className='panel-sub-heading'>Salary</h2>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='jobtype'>Jobtype*</FormLabel>
                        <select className='form-select' value={jobtype} onChange={(e) => setJobType(e.target.value)}>
                            <option value="none">--Select--</option>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="internship">Internship</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='minsalary'>Min Salary*</FormLabel>
                        <FormControl id='minsalary' value={minsalary} onChange={(e) => setMinsalary(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='maxsalary'>Max Salary*</FormLabel>
                        <FormControl id='maxsalary' value={maxsalary} onChange={(e) => setMaxsalary(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <h2 className='panel-sub-heading'>Job location</h2>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='city'>City*</FormLabel>
                        <FormControl id="city" value={city} onChange={(e) => setCity(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='city'>Country*</FormLabel>
                        <FormControl id='country' value={country} onChange={(e) => setCountry(e.target.value)}/>
                    </FormGroup>
                </Col>
                <Col xs={12}>
                    <h2 className='panel-sub-heading'>Advanced Information</h2>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='expirydate'>Job Expiry*</FormLabel>
                        <FormControl type='date' id='expirydate' value={jobexpiry} onChange={(e) => setjobexpiry(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='joblevel'>Job Level*</FormLabel>
                        <FormControl type='text' id='joblevel' value={joblevel} onChange={(e) => setJoblevel(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='minexperience'>Min Experience*</FormLabel>
                        <FormControl type='text' id='minexperience' value={minexperience} onChange={(e) => setMinexperience(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='maxexperience'>Max Experience*</FormLabel>
                        <FormControl type='text' id='maxexperience' value={maxexperience} onChange={(e) => setMaxexperience(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <FormLabel htmlFor='education'>Education*</FormLabel>
                        <FormControl type='text' id='education' value={education} onChange={(e) => setEducation(e.target.value)} required/>
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <FormLabel htmlFor='education'>Job Description*</FormLabel>
                        <textarea className='form-control' value={jobdescription} onChange={(e) => setJobdescription(e.target.value)}></textarea>
                    </FormGroup>
                </Col>
            </Row>
            <h3 className="h6 mt-2">Skills Required</h3>
            <select className="form-select mb-2 mt-2" multiple value={selectedSkills} onChange={(e) =>
                setSelectedSkills(
                Array.from(e.target.selectedOptions, (option) => option.value)
                )
            }>
                {
                    skills.map((skill, index) => {
                        return <option key={index} value={skill._id}>{skill.title}</option>
                    })
                }
            </select>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary mt-2' onClick={handleSaveJob}>Post Job</button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton>
                    Add Job Role
                </ModalHeader>
                <ModalBody>
                    <label className="form-label">Title</label>
                    <FormControl type="text" value={titleJR} onChange={(e) => setTitleJR(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => handleAddJobRole()}>Save</button>
                </ModalFooter>
            </Modal>
            <Modal show={showModal2} onHide={() => setShowModal2(false)}>
                <ModalHeader closeButton>
                    Add Category
                </ModalHeader>
                <ModalBody>
                    <input type='file' accept='image/*' className='form-control' onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            setIcon(file);
                        }
                    }}/>
                    <label className="form-label">Title</label>
                    <FormControl type="text" value={titleCat} onChange={(e) => setTitleCat(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => handleAddCategory()}>Save</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default PostJob
