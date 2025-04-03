import { Modal, ModalBody, ModalHeader } from "react-bootstrap"

const AuthModal = ({ show, handleHide }) => {
    return (
        <Modal show={show} onHide={handleHide} centered>
            <ModalHeader closeButton>
                <Modal.Title>
                    Sign In
                </Modal.Title>
            </ModalHeader>
            <ModalBody>
                <input type="email" className="form-control mb-3" placeholder="Email address"/>
                <input type="password" className="form-control mb-3" placeholder="Password"/>
                <button className="btn btn-primary w-100">Sign In</button>
            </ModalBody>
        </Modal>
    )
}

export default AuthModal