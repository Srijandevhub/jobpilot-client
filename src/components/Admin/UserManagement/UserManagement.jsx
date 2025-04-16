import { useEffect, useState } from "react"
import { FormControl, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "react-bootstrap"
import { Flip, toast } from "react-toastify";
import { baseUrl } from "../../../url"; 
import axios from "axios";
import { useSelector } from "react-redux";


const UserManagement = () => {
    const [show, setShow] = useState("");

    const user = useSelector((state) => state.user.data);

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("none");

    const [companies, setCompanies] = useState([]);

    const [comapny, setCompany] = useState('none');

    const handleAddUser = async () => {
        try {
            const res = await axios.post(`${baseUrl}/api/v1/user/adduser`, {
                fullname,
                username,
                email,
                password,
                role,
                companyid: comapny
            }, { withCredentials: true });
            toast.success(res.data.message, {
                position: 'top-center',
                progress: false,
                pauseOnHover:  false,
                pauseOnFocusLoss: false,
                transition: Flip
            })
            setFullname("");
            setUsername("");
            setEmail("");
            setPassword("");
            setRole("none");
            setCompany("none");
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
    
    const [users, setUsers] = useState([]);
    
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
        if (user.role === 'super_admin') {
            fetchCompanies();
        } else if (user.role === 'recruiter') {
            setCompany("none");
        } else {
            setCompany(user.companyid);
        }
    }, [user])

    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/v1/user/allusers`, { withCredentials: true });
                setUsers(res.data.users);
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
        fetchUsers();
    }, [refresh])
    return (
        <>
            <button className="btn btn-primary" onClick={() => setShow(true)}>Add User</button>
            <Modal onHide={() => setShow(false)} show={show}>
                <ModalHeader closeButton>
                    Add User
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label className="form-label">Fullname</label>
                        <FormControl type="text" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <label className="form-label">Username</label>
                        <FormControl type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <label className="form-label">Email</label>
                        <FormControl type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <label className="form-label">Password</label>
                        <FormControl type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <label className="form-label">Role</label>
                        <select className="form-select" value={role} onChange={(e) => {
                            const value = e.target.value;
                            if (value === "none" || value === "super_admin" || value === "applicant") {
                                setCompany("none");
                            }
                            setRole(value);
                        }}>
                            <option value={"none"}>--Select--</option>
                            { user.role === 'super_admin' && <option value={"super_admin"}>Super Admin</option> }
                            { user.role !== 'applicant' && user.role !== 'recruiter' && <option value={"company_admin"}>Company Admin</option> }
                            { user.role !== 'applicant' && user.role !== 'recruiter' && <option value={"recruiter"}>Recruiter</option> }
                            <option value={"applicant"}>Applicant</option>
                        </select>
                    </FormGroup>
                    {
                        user.role === 'super_admin' &&
                        role !== 'applicant' && role !== 'none' && role !== 'super_admin' &&
                        <FormGroup>
                            <label className="form-label">Company</label>
                            <select className="form-select" value={comapny} onChange={(e) => setCompany(e.target.value)}>
                                <option value={"none"}>--Select--</option>
                                {
                                    companies.map((company, index) => {
                                        return <option key={index} value={company._id}>{company.name}</option>
                                    })
                                }
                            </select>
                        </FormGroup>
                    }
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={() => handleAddUser()}>Add User</button>
                </ModalFooter>
            </Modal>
            <Table responsive striped>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Username</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.fullname}</td>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default UserManagement;