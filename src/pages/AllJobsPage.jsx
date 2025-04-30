import AllJobs from "../components/Admin/AllJobs/AllJobs"
import PanelLayout from "../layouts/PanelLayout"

const AllJobsPage = () => {
    return (
        <PanelLayout activeMenu={"jobs"}>
            <AllJobs />
        </PanelLayout>
    )
}

export default AllJobsPage