import { useSelector } from "react-redux";
import CompanyManagement from "../components/Admin/CompanyManagement/CompanyManagement";
import PanelLayout from "../layouts/PanelLayout"

const CompanyManagementPage = () => {
    const user = useSelector((state) => state.user.data);
    if (!user) return <h1 className="text-center mt-5">Loading</h1>;
    if (user.role !== "super_admin") return <h1 className="text-center mt-5">403 Access Fodbidden</h1>
    return (
        <PanelLayout activeMenu={"companies"}>
            <CompanyManagement />
        </PanelLayout>
    )
}

export default CompanyManagementPage;