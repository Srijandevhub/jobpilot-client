import { useEffect, useState } from 'react'
import styles from './Applications.module.css'
import axios from 'axios';
import { baseUrl } from '../../../url';
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Applications = () => {
    const { id } = useParams();
    const [applications, setApplications] = useState([]);
    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/application/${id}`, {
                    withCredentials: true
                });
                setApplications(res.data.applications);
            } catch (error) {
                console.log(error);
            }
        }
        fetchApplications();
    }, [])

    const [applicationid, setApplicationid] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectStatus, setSelectedStatus] = useState("applied");
    const fetchApplication = async (id) => {
        try {
            const res = await axios.get(`${baseUrl}/api/v1/application/getapplication/${id}`, { withCredentials: true });
            setSelectedStatus(res.data.application.status);
            setShowModal(true);
            setApplicationid(id);
        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdateApplication = async () => {
        try {
            const res = await axios.put(`${baseUrl}/api/v1/application/${applicationid}`, {
                status: selectStatus
            }, { withCredentials: true });
            setShowModal(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                    <th>Sl No</th>
                    <th>Description</th>
                    <th>Match</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applications.map((application, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <p className='mb-0'>{application.applicant}</p>
                                        <h6>{application.title}</h6>
                                    </td>
                                    <td>{application.match}%</td>
                                    <td>
                                        <button className='btn btn-secondary' aria-label='details' onClick={() => fetchApplication(application._id)}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <ModalHeader closeButton>
                    Edit Application
                </ModalHeader>
                <ModalBody>
                    <label className='form-label'>Status</label>
                    <select className='form-select' value={selectStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                        <option value={"applied"}>Applied</option>
                        <option value={"under_review"}>Under Review</option>
                        <option value={"rejected"}>Rejected</option>
                        <option value={"accepted"}>Accepted</option>
                    </select>
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary' onClick={() => handleUpdateApplication()}>
                        Save
                    </button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Applications