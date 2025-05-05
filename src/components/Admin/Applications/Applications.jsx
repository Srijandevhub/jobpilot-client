import { useEffect, useState } from 'react'
import styles from './Applications.module.css'
import axios from 'axios';
import { baseUrl } from '../../../url';
import { Table } from 'react-bootstrap';
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
    return (
        <Table responsive>
            <thead>
                <tr>
                <th>Sl No</th>
                <th>Applicant</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    applications.map((application, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{application.applicant}</td>
                                <td>
                                    <button className='btn btn-secondary' aria-label='details'>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                        <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Applications