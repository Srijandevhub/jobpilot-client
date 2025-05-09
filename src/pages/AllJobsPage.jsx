import { useSelector } from "react-redux";
import AllJobs from "../components/Admin/AllJobs/AllJobs"
import PanelLayout from "../layouts/PanelLayout"

const AllJobsPage = () => {
    const user = useSelector((state) => state.user.data);
    if (!user) return <h1 className="text-center mt-5">Loading</h1>;
    if (user.role == "applicant") return <h1 className="text-center mt-5">403 Access Fodbidden</h1>
    return (
        <PanelLayout activeMenu={"jobs"}>
            <AllJobs />
        </PanelLayout>
    )
}

export default AllJobsPage