import axios from "axios";
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Flip, toast } from "react-toastify";
import { baseUrl } from "../../../url";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/job`, { withCredentials: true });
                setJobs(res.data.jobs);
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
        fetchJobs();
    }, [])
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{job.title}</td>
                                    <td>{job.isarchived ? "Archived" : "Open"}</td>
                                    <td>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default AllJobs