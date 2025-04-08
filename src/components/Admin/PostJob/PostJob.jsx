import { Col, FormControl, FormGroup, FormLabel, FormSelect, Row } from 'react-bootstrap'
import styles from './PostJob.module.css'

const PostJob = () => {
    return (
        <>
        <h1 className='panel-heading'>Post Job</h1>
        <Row>
            <Col xs={12}>
                <FormGroup>
                    <FormLabel htmlFor='title'>Job Title*</FormLabel>
                    <FormControl id='title' required/>
                </FormGroup>
            </Col>
            <Col xs={12}>
                <h2 className='panel-sub-heading'>Salary</h2>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <FormLabel htmlFor='minsalary'>Min Salary*</FormLabel>
                    <FormControl id='minsalary' required/>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <FormLabel htmlFor='maxsalary'>Max Salary*</FormLabel>
                    <FormControl id='maxsalary' required/>
                </FormGroup>
            </Col>
            <Col xs={12}>
                <h2 className='panel-sub-heading'>Job location</h2>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <FormLabel htmlFor='city'>City*</FormLabel>
                    <FormSelect id='city'>
                        <option>--Select City--</option>
                    </FormSelect>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <FormLabel htmlFor='city'>Country*</FormLabel>
                    <FormSelect id='city'>
                        <option>--Select Country--</option>
                    </FormSelect>
                </FormGroup>
            </Col>
            <Col xs={12}>
                <h2 className='panel-sub-heading'>Advanced Information</h2>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <FormLabel htmlFor='expirydate'>Job Expiry*</FormLabel>
                    <FormControl type='date' id='expirydate' required/>
                </FormGroup>
            </Col>
        </Row>
        <div className='d-flex justify-content-end'>
            <button className='btn btn-primary'>Post Job</button>
        </div>
        </>
    )
}

export default PostJob