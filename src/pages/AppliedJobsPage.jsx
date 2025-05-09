import AppliedJobs from "../components/Admin/AppliedJobs/AppliedJobs"
import PanelLayout from "../layouts/PanelLayout"

const AppliedJobsPage = () => {
    return (
        <PanelLayout activeMenu={"appliedjobs"}>
            <AppliedJobs />
        </PanelLayout>
    )
}

export default AppliedJobsPage