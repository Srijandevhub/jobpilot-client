import { useSelector } from "react-redux";
import PanelLayout from "../layouts/PanelLayout"
import UserManagement from "../components/Admin/UserManagement/UserManagement";

const UserManagementPage = () => {
    const user = useSelector((state) => state.user.data);
    if (!user) return <h1 className="text-center mt-5">Loading</h1>;
    if (user.role == "applicant") return <h1 className="text-center mt-5">403 Access Fodbidden</h1>
    return (
        <PanelLayout activeMenu={"usermanagement"}>
            <UserManagement />
        </PanelLayout>
    )
}

export default UserManagementPage;