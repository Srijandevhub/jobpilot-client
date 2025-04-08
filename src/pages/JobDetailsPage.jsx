import JobDetails from "../components/JobDetails/JobDetails"
import MainLayout from "../layouts/MainLayout"

const JobDetailsPage = () => {
    return (
        <MainLayout menuActive={"findjob"}>
            <JobDetails />
        </MainLayout>
    )
}

export default JobDetailsPage