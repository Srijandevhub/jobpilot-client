import CompanyDetails from "../components/CompanyDetails/CompanyDetails"
import MainLayout from "../layouts/MainLayout"

const CompanyDetailsPage = () => {
    return (
        <MainLayout menuActive={"explorecompanies"}>
            <CompanyDetails />
        </MainLayout>
    )
}

export default CompanyDetailsPage