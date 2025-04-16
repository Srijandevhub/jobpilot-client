import { useEffect, useState } from "react";
import { Col, FormControl, FormGroup, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import styles from './MyProfile.module.css'
import { Flip, toast } from "react-toastify";
import axios from "axios";
import { baseUrl } from "../../../url";
import { updateuser } from "../../../utils/userSlice";

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

    return (
        <Row>
            <Col md={3}>
                <div className={styles.wrapper}>
                    <img src={profilepicture} alt="profile"/>
                    <input type="file" accept="image/*" onChange={(e) => handleUpdateProfilePicture(e)}/>
                </div>
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
                <button className="btn btn-primary mt-2" onClick={() => handleUpdateProfile()}>Save</button>
            </Col>
        </Row>
    )
}

export default MyProfile