import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import CompanyListing from "../components/CompanyListing/CompanyListing"
import MainLayout from "../layouts/MainLayout"

const ExploreCompaniesPage = () => {
    return (
        <MainLayout menuActive={"explorecompanies"}>
            <BreadCrumb heading={"Explore Companies"} activeMenus={["Explore Companies"]}/>
            <CompanyListing />
        </MainLayout>
    )
}

export default ExploreCompaniesPage