import axios from "axios";
import { useEffect, useState } from "react"
import { Card, CardBody, CardFooter, CardHeader, Col, Row, Table } from "react-bootstrap"
import { baseUrl } from "../../../url";
import styles from './AppliedJobs.module.css';
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const socket = io(baseUrl, {
    withCredentials: true,
    transports: ['polling', 'websocket']
});

const AppliedJobs = () => {
    const user = useSelector((state) => state.user.data);
    const [jobs, setJobs] = useState([]);
    const [chatbar, setChatbar] = useState(false);
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
    const [chats, setChats] = useState([]);
    const [recruiterid, setRecruiterid] = useState('');
    const [message, setMessage] = useState("");
    const [chatroomid, setChatroomid] = useState('');

    const chatwithRecruiter = async (recId) => {
        try {
            const chatroomid = [user._id, recId].sort().join("_");
            setRecruiterid(recId);
            setChatroomid(chatroomid);
            const res = await axios.get(`${baseUrl}/api/v1/chat/${chatroomid}`, { withCredentials: true });
            setChats(res.data.messages);
            setChatbar(true);
            socket.emit('joinroom', chatroomid);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        socket.on('receivemessage', (msg) => {
            if (msg.chatroomid === chatroomid) {
                setChats(prev => [...prev, msg]);
            }
        });
        return () => {
            socket.off('receivemessage');
        }
    }, [chatroomid])
    const sendMessage = () => {
        if (!message.trim()) return;
        const newMsg = {
            senderid: user._id,
            receiverid: recruiterid,
            content: message
        }
        socket.emit('sendmessage', newMsg);
        setMessage("");
    }
    return (
        <>
        <Table responsive>
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th>Description</th>
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
                                <td>
                                    <h5>{job.jobtitle}</h5>
                                    <p className="m-0">At {job.companyname}</p>
                                </td>
                                <td>
                                    {job.status === 'applied' && <span className="badge text-bg-info">Applied</span>}
                                    {job.status === 'under_review' && <span className="badge text-bg-warning">Under Review</span>}
                                    {job.status === 'rejected' && <span className="badge text-bg-danger">Rejected</span>}
                                    {job.status === 'accepted' && <span className="badge text-bg-success">Accepted</span>}
                                </td>
                                <td>
                                    <button className="btn btn-outline-info" onClick={() => {
                                        chatwithRecruiter(job.recruiterid);
                                        //setRecruiterid(job.recruiterid);
                                    }}>
                                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                                        </svg>
                                        Message Recuiter
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        <aside className={`${styles.chatSidebar} ${chatbar ? `${styles.active}` : ''} d-flex flex-column`}>
            <Card className="vh-100">
                <CardHeader>
                    <div className="d-flex align-items-center justify-content-between">
                        <div>Message</div>
                        <button aria-label="close" className={styles.closebtn} onClick={() => setChatbar(false)}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>
                        </button>
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="h-100 overflow-auto">
                        {
                            chats.map((chat, index) => {
                                return (
                                    <div className={`d-flex ${chat.sender === user._id ? 'justify-content-end' : 'justify-content-start'}`} key={index}>
                                        <div className={`p-2 ${chat.sender === user._id ? 'bg-success' : 'bg-dark'} text-white rounded mb-1`} style={{ width: '200px' }}>
                                            {chat.content}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col sm={9}>
                            <input type="text" className="form-control" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        </Col>
                        <Col sm={3}>
                            <button className="btn btn-danger w-100" aria-label="message" onClick={() => sendMessage()}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"/>
                                </svg>
                            </button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </aside>
        </>
    )
}

export default AppliedJobs
