import axios from "axios";
import { useEffect, useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import { Flip, toast } from "react-toastify";
import { baseUrl } from "../../../url";
import { Form } from "react-router-dom";

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
                setCoverImage(company.coverimage);
                setLogoImage(company.logoimage);
                setIsArchieved(company.isarchieved);

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

    return (
        <>
            <Row>
                <Col md={6}>
                    <label className="form-label">Name</label>
                    <FormControl type="text" value={name} onChange={(e) => setName(e.target.value)} disabled/>
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
            <button className="btn btn-primary mt-2">Save</button>
        </>
    )
}

export default MyCompany;