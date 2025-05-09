import { useSelector } from "react-redux";
import Applications from "../components/Admin/Applications/Applications"
import PanelLayout from "../layouts/PanelLayout"

const ApplicationsPage = () => {
    const user = useSelector((state) => state.user.data);
    if (!user) return <h1 className="text-center mt-5">Loading</h1>;
    if (user.role == "applicant") return <h1 className="text-center mt-5">403 Access Fodbidden</h1>
    return (
        <PanelLayout activeMenu={"jobs"}>
            <Applications />
        </PanelLayout>
    )
}

export default ApplicationsPage