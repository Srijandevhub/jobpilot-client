import { Col, Container, Row } from "react-bootstrap"
import MainHeader from "../components/MainHeader/MainHeader"
import PanelSidebar from "../components/PanelSidebar/PanelSidebar"

const PanelLayout = ({ children, activeMenu }) => {
    return (
        <div className="d-flex flex-column vh-100">
            <MainHeader menuActive="dashboard" panel={true}/>
            <div className="flex-grow-1 border-top">
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={2} className="border-end p-0">
                            <PanelSidebar activeMenu={activeMenu}/>
                        </Col>
                        <Col lg={10} className="p-0">
                            <div className="h-100 pt-5 pb-2 px-3 overflow-auto">
                                { children }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="p-2 bg-primary-subtle border-top">
                <p className="text-center m-0">Copyright Reserved - Jobpilot</p>
            </div>
        </div>
    )
}

export default PanelLayout
