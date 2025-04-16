import axios from "axios";
import { useEffect, useState } from "react";
import { Col, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "react-bootstrap";
import { Flip, toast } from "react-toastify";
import { baseUrl } from "../../../url";
import styles from './MyCompany.module.css';

const MyCompany = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [foundedIn, setFoundedIn] = useState("");
    const [organisationType, setOrganisationType] = useState("");
    const [teamSize, setTeamSize] = useState("");
    const [website, setWebsite] = useState("");
    const [phoneCode, setPhoneCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [logoImage, setLogoImage] = useState("");
    const [isArchieved, setIsArchieved] = useState(true);
    const [industrytypeid, setIndustrytypeid] = useState("none");

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/company/mycompany`, {
                    withCredentials: true
                });
                const company = res.data.company;
                setName(company.name);
                setDescription(company.description);
                setFoundedIn(company.foundedin);
                setOrganisationType(company.organisationtype);
                setTeamSize(company.teamsize);
                setWebsite(company.website);
                setPhoneCode(company.phonecode);
                setPhoneNumber(company.phonenumber);
                setEmail(company.email);
                setCoverImage(company.coverimage || "https://static.spacecrafted.com/a7396ee5481b4f909a919d4d9b12438c/i/fb8d760141e741eab1385d7d1e49585f/1/4SoifmQp45JMgBnHp7ed2/1200-x-720%20Placeholder%20Image.jpg");
                setLogoImage(company.logoimage || "https://www.diabetes.ie/wp-content/uploads/2021/05/logo-Placeholder.jpg");
                setIsArchieved(company.isarchieved);
                setIndustrytypeid(company.industrytypeid);

            } catch (error) {
                if (error.status === 500) {
                    toast.error(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    });
                } else {
                    toast.warn(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    });
                }
            }
        }
        fetchCompany();
    }, [])

    const handleCoverImageUpload = async (e) => {
        try {
            const file = e.target.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("imgfile", file);
                const res = await axios.post(`${baseUrl}/api/v1/company/updatemycompanycover`, formData, {
                    withCredentials: true
                });
                setCoverImage(res.data.imageUrl);
            }
        } catch (error) {
            if (error.status === 500) {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            } else {
                toast.warn(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            }
        } finally {
            e.target.value = null;
        }
    }

    const handleUploadLogo = async (e) => {
        try {
            const file = e.target.files[0];
            if (file) {
                const formdata = new FormData();
                formdata.append("imgfile", file);
                const res = await axios.post(`${baseUrl}/api/v1/company/updatemycompanylogo`, formdata, {
                    withCredentials: true
                });
                setLogoImage(res.data.imageUrl);
            }
        } catch (error) {
            if (error.status === 500) {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            } else {
                toast.warn(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            }
        } finally {
            e.target.value = null;
        }
    }

    const handleUpdateInfo = async () => {
        try {
            const res = await axios.put(`${baseUrl}/api/v1/company/updatemycompany`, {
                description,
                foundedin: foundedIn,
                organisationtype: organisationType,
                teamsize: teamSize,
                website,
                phonecode: phoneCode,
                phonenumber: phoneNumber,
                email,
                isarchieved: isArchieved,
                industrytypeid
            }, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip
            })
        } catch (error) {
            if (error.status === 500) {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            } else {
                toast.warn(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            }
        }
    }

    const [refreshIndustries, setRefreshIndustries] = useState(false);
    const [industries, setIndustries] = useState([]);
    useEffect(() => {
        const fetchIndustries = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/industrytype/`, { withCredentials: true });
                setIndustries(res.data.industrytypes);
            } catch (error) {
                if (error.status === 500) {
                    toast.error(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    });
                } else {
                    toast.warn(error.response.data.message, {
                        position: 'top-center',
                        progress: false,
                        pauseOnHover:  false,
                        pauseOnFocusLoss: false,
                        transition: Flip,
                        hideProgressBar: true
                    });
                }
            }
        }
        fetchIndustries();
    }, [refreshIndustries])

    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const handleAddIndustryType = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/v1/industrytype/`, {
                title
            }, { withCredentials: true });
            setRefreshIndustries(!refreshIndustries);
            setTitle("");
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip
            })
        } catch (error) {
            if (error.status === 500) {
                toast.error(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            } else {
                toast.warn(error.response.data.message, {
                    position: 'top-center',
                    progress: false,
                    pauseOnHover:  false,
                    pauseOnFocusLoss: false,
                    transition: Flip,
                    hideProgressBar: true
                });
            }
        } finally {
            setShowModal(false);
        }
    }

    return (
        <>
            <div className={styles.wrapper}>
                <img src={coverImage} alt="cover"/>
                <input className={styles.inp} type="file" accept="image/*" onChange={(e) => handleCoverImageUpload(e)}/>
            </div>
            <div className={styles.logoWrapper}>
                <img src={logoImage} alt="logo"/>
                <input className={styles.inp} type="file" accept="image/*" onChange={(e) => handleUploadLogo(e)}/>
            </div>
            <Row>
                <Col md={6}>
                    <label className="form-label">Name</label>
                    <FormControl type="text" value={name} onChange={(e) => setName(e.target.value)} disabled/>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col sm={10}>
                            <label className="form-label">Category</label>
                            <select className="form-select" value={industrytypeid} onChange={(e) => setIndustrytypeid(e.target.value)}>
                                <option>--Select--</option>
                                {
                                    industries.map((item, index) => {
                                        return <option value={item._id} key={index}>{item.title}</option>
                                    })
                                }
                            </select>
                        </Col>
                        <Col sm={2}>
                            <label className="form-label opacity-0">Category</label>
                            <button className="btn btn-primary" onClick={() => setShowModal(true)}>New</button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12}>
                    <label className="form-label">Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
                </Col>
                <Col md={6}>
                    <label className="form-label">Founded In</label>
                    <FormControl type="date" value={foundedIn} onChange={(e) => setFoundedIn(e.target.value)}/>
                </Col>
                <Col md={6}>
                    <label className="form-label">Organisation Type</label>
                    <FormControl type="text" value={organisationType} onChange={(e) => setOrganisationType(e.target.value)}/>
                </Col>
                <Col md={6}>
                    <label className="form-label">Team size</label>
                    <FormControl type="text" value={teamSize} onChange={(e) => setTeamSize(e.target.value)}/>
                </Col>
                <Col md={6}>
                    <label className="form-label">Website</label>
                    <FormControl type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
                </Col>
                <Col md={6}>
                    <label className="form-label">phone code</label>
                    <FormControl type="text" value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)}/>
                </Col>
                <Col md={6}>
                    <label className="form-label">Phone Number</label>
                    <FormControl type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </Col>
                <Col md={6}>
                    <label className="form-label">Email</label>
                    <FormControl type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Col>
                <Col md={6}>
                    <label className="form-label opacity-0">Email</label>
                    <div className="form-check form-switch mt-1">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isArchieved} onChange={() => setIsArchieved(!isArchieved)}/>
                        <label className="form-check-label" for="flexSwitchCheckDefault">Is Archieved</label>
                    </div>
                </Col>
            </Row>
            <button className="btn btn-primary mt-2" onClick={() => handleUpdateInfo()}>Save</button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton>
                    Add Industry Type
                </ModalHeader>
                <ModalBody>
                    <label className="form-label">Title</label>
                    <FormControl type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => handleAddIndustryType()}>Save</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default MyCompany;
