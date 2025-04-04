import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import JobListing from "../components/JobListing/JobListing"
import MainLayout from "../layouts/MainLayout"

const FindJobPage = () => {
    return (
        <MainLayout menuActive={"findjob"}>
            <BreadCrumb heading={"Find Job"} activeMenus={["Find Job"]}/>
            <JobListing />
        </MainLayout>
    )
}

export default FindJobPage