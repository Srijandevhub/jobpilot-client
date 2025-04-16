import { useEffect, useState } from "react";
import { Col, FormControl, FormGroup, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styles from './MyProfile.module.css'
import { Flip, toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../../../url";
import { updateuser } from "../../../utils/userSlice";
import { Link } from "react-router-dom";

const MyProfile = () => {
    const user = useSelector((state) => state.user.data);
    
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phonecode, setPhoneCode] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [title, setTitle] = useState("");
    const [personalwebsite, setPersonalWebsite] = useState("");
    const [nationality, setNationality] = useState("");
    const [dob, setdob] = useState("");
    const [gender, setGender] = useState("");
    const [maritalstatus, setMaratialStatus] = useState("");
    const [bio, setBio] = useState("");
    
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");

    const [profilepicture, setprofilepicture] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541");

    useEffect(() => {
        setFullname(user?.fullname);
        setUsername(user?.username);
        setEmail(user?.email);
        setPhoneCode(user?.phonecode);
        setPhonenumber(user?.phonenumber);
        setTitle(user?.title);
        setPersonalWebsite(user?.personalwebsite);
        setNationality(user?.nationality);
        setdob(user?.dateofbirth);
        setGender(user?.gender);
        setMaratialStatus(user?.maritalstatus);
        setBio(user?.biography);

        setStreet(user?.address?.street);
        setCity(user?.address?.city);
        setState(user?.address?.state);
        setZipcode(user?.address?.zipcode);
        setCountry(user?.address?.country);

        setprofilepicture(user?.profilepicture || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541");

    }, [user]);
    const dispatch = useDispatch();

    const handleUpdateProfile = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/v1/user/updatemyprofile`, {
                fullname,
                phonecode,
                phonenumber,
                title,
                personalwebsite,
                nationality,
                dateofbirth: dob,
                gender,
                maritalstatus,
                biography: bio,
                street,
                city,
                state,
                country,
                zipcode
            }, { withCredentials: true });
            dispatch(updateuser(res.data.user));
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

    const handleUpdateProfilePicture = async (e) => {
        try {
            const file = e.target.files[0];
            if (file) {
                const formdata = new FormData();
                formdata.append("imgfile", file);
                const res = await axios.post(`${baseUrl}/api/v1/user/updateprofileimage`, formdata, { withCredentials: true });
                setprofilepicture(res.data.imageUrl);
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
        }
    }

    const handleMultipleResumes = async (e) => {
        try {
            const formdata = new FormData();
            const files = e.target.files;
            console.log(files);
            for (let i = 0; i < files.length; i++) {
                formdata.append("resumes", files[i]);
            }
            const res = await axios.post(`${baseUrl}/api/v1/resume/`, formdata, {
                withCredentials: true
            });
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
            e.target.value = null;
            setRefresh(!refresh);
        }
    }

    const [refresh, setRefresh] = useState(false);
    const [resumes, setResumes] = useState([]);
    useEffect(() => {
        const fetchresume = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/resume/`, { withCredentials: true });
                setResumes(res.data.resumes);
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
        fetchresume();
    }, [refresh])

    const handleDeleteResume = async (id) => {
        try {
            const res = await axios.delete(`${baseUrl}/api/v1/resume/${id}`, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip
            })
            setRefresh(!refresh);
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

    return (
        <Row>
            <Col md={3}>
                <div className={styles.wrapper}>
                    <img src={profilepicture} alt="profile"/>
                    <input type="file" accept="image/*" onChange={(e) => handleUpdateProfilePicture(e)}/>
                </div>
                <div className={styles.resumeupload}>
                    <i>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/>
                        </svg>
                    </i>
                    <h6>Upload Your Resume</h6>
                    <input type="file" className={styles.inp} multiple title="" onChange={(e) => handleMultipleResumes(e)}/>
                </div>
                {
                    resumes.map((resume, index) => {
                        const getDate = (val) => {
                            const curr = new Date(val);
                            const date = String(curr.getDate()).padStart(2, "0");
                            const month = String(curr.getMonth() + 1).padStart(2, '0');
                            const year = curr.getFullYear();
                            return `${date}/${month}/${year}`;
                        }
                        return (
                            <div key={index} className={styles.resumeBx}>
                                <div className={styles.content}>
                                    <h5 className={styles.title}><Link to={resume.url} target="_blank" download={true}>{resume.publicid}</Link></h5>
                                    <span className={styles.date}>Uploaded: {getDate(resume.createdAt)}</span>
                                </div>
                                <button className={`${styles.delBtn} text-danger`} aria-label="delete" onClick={() => handleDeleteResume(resume._id)}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                    </svg>
                                </button>
                            </div>
                        )
                    })
                }
            </Col>
            <Col md={9}>
                <h3 className="h6">Personal Info:-</h3>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <label className="form-label">Full Name</label>
                            <FormControl type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <label className="form-label">Username</label>
                            <FormControl type="text" value={username} onChange={(e) => setUsername(e.target.value)} disabled/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <label className="form-label">Email</label>
                            <FormControl type="text" value={email} onChange={(e) => setEmail(e.target.value)} disabled/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col sm={3}>
                                <label className="form-label">Phonecode</label>
                                <FormControl type="text" value={phonecode} onChange={(e) => setPhoneCode(e.target.value)}/>
                            </Col>
                            <Col sm={9}>
                                <label className="form-label">Phonenumber</label>
                                <FormControl type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12}>
                        <label className="form-label">Title</label>
                        <FormControl type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">Personal Website</label>
                        <FormControl type="url" value={personalwebsite} onChange={(e) => setPersonalWebsite(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">Nationality</label>
                        <FormControl type="url" value={nationality} onChange={(e) => setNationality(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">Date of birth</label>
                        <FormControl type="date" value={dob} onChange={(e) => setdob(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">Gender</label>
                        <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value={"none"}>--Select--</option>
                            <option value={"male"}>Male</option>
                            <option value={"female"}>Female</option>
                        </select>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">Maratial Status</label>
                        <select className="form-select" value={maritalstatus} onChange={(e) => setMaratialStatus(e.target.value)}>
                            <option value={"none"}>--Select--</option>
                            <option value={"married"}>Married</option>
                            <option value={"single"}>Single</option>
                        </select>
                    </Col>
                    <Col sm={12}>
                        <label className="form-label">Biography</label>
                        <textarea onChange={(e) => setBio(e.target.value)} className="form-control" value={bio}>
                        </textarea>
                    </Col>
                </Row>
                <h3 className="h6 mt-2">Address:-</h3>
                <Row>
                    <Col sm={12}>
                        <label className="form-label">Street</label>
                        <FormControl type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">City</label>
                        <FormControl type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">State</label>
                        <FormControl type="text" value={state} onChange={(e) => setState(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">Country</label>
                        <FormControl type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
                    </Col>
                    <Col md={6}>
                        <label className="form-label">Zipcode</label>
                        <FormControl type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end">
                    <button className={`mt-2 ${styles.btn}`} onClick={() => handleUpdateProfile()}>Save</button>
                </div>
            </Col>
        </Row>
    )
}

export default MyProfile
