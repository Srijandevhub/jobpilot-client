import { Col, FormControl, FormGroup, FormLabel, FormSelect, Row } from 'react-bootstrap'
import styles from './PostJob.module.css'
import { useState } from 'react'

const PostJob = () => {
    const [title, setTitle] = useState("");
    const [minslary, setMinsalary] = useState("");
    const [maxsalary, setMaxsalary] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [jobexpiry, setjobexpiry] = useState("");
    const [joblevel, setJoblevel] = useState("");
    const [minexperience, setMinexperience] = useState("");
    const [maxexperience, setMaxexperience] = useState("");
    const [education, setEducation] = useState("");
    const [jobdescription, setJobdescription] = useState("");
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
            <Col xs={12}>
                <h2 className='panel-sub-heading'>Salary</h2>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <FormLabel htmlFor='minsalary'>Min Salary*</FormLabel>
                    <FormControl id='minsalary' value={minslary} onChange={(e) => setMinsalary(e.target.value)} required/>
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
        </Row>
        <div className='d-flex justify-content-end'>
            <button className='btn btn-primary mt-2'>Post Job</button>
        </div>
        </>
    )
}

export default PostJob
