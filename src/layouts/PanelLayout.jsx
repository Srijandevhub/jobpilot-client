import { Col, Container, Row } from "react-bootstrap"
import MainHeader from "../components/MainHeader/MainHeader"
import PanelSidebar from "../components/PanelSidebar/PanelSidebar"
import { useEffect, useState } from "react"
import PanelSidebarMobile from "../components/PanelSidebar/PanelSidebarMobile"

const PanelLayout = ({ children, activeMenu }) => {
    const [screensize, setScreensize] = useState(null);
    const handleResize = () => {
        setScreensize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return (
        <div className="d-flex flex-column vh-100">
            <MainHeader menuActive="dashboard" panel={true}/>
            <div className="flex-grow-1 border-top">
                <Container className="h-100">
                    <Row className="h-100">
                        {
                            screensize > 991 ?
                            <Col lg={2} className="border-end p-0">
                                <PanelSidebar activeMenu={activeMenu}/>
                            </Col>
                            :
                            <PanelSidebarMobile activeMenu={activeMenu}/>
                        }
                        <Col lg={10} className="p-0">
                            <div className="h-100 pt-5 pb-2 px-md-3 overflow-auto" style={{ paddingLeft: screensize < 815 ? `60px` : "", paddingRight: screensize < 815 ? `12px` : "" }}>
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
