import axios from "axios";
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { baseUrl } from "../../../url";

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/application/myapplications`, { withCredentials: true });
                setJobs(res.data.applications);
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs();
    }, [])
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    jobs.map((job, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <h5>{job.jobtitle}</h5>
                                    <p className="m-0">At {job.companyname}</p>
                                </td>
                                <td>
                                    {job.status}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default AppliedJobs