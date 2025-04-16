import axios from "axios";
import { useEffect, useState } from "react";
import { FormControl, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "react-bootstrap";
import { baseUrl } from "../../../url";
import { Flip, toast } from "react-toastify";

const CompanyManagement = () => {
    const [show, setShow] = useState(false);

    const [name, setName] = useState("");

    const [companies, setCompanies] = useState([]);

    const [refresh, setRefresh] = useState(false);

    const handleSave = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/v1/company/addcompany`, {
                name
            }, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip
            })
            setName("");
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
            setShow(false);
            setRefresh(!refresh);
        }
    }

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/company/allcompanies`, { withCredentials: true });
                setCompanies(res.data.companies);
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
        fetchCompanies();
    }, [refresh])

    return (
        <>
            <button className="btn btn-primary" onClick={() => setShow(true)}>Add Company</button>
            <Modal show={show} onHide={() => setShow(false)}>
                <ModalHeader closeButton>
                    Add Company
                </ModalHeader>
                <ModalBody>
                    <label className="form-label">Name</label>
                    <FormControl type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => handleSave()}>Save</button>
                </ModalFooter>
            </Modal>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        companies.map((company, index) => {
                            return (
                                <tr key={index}>
                                    <td>{company.name}</td>
                                    <td>{company.isarchived ? "Archived" : "Open"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default CompanyManagement;