import MyCompany from "../components/Admin/MyCompany/MyCompany";
import PanelLayout from "../layouts/PanelLayout"

const MyCompanyPage = () => {
    return (
        <PanelLayout activeMenu={"mycompany"}>
            <MyCompany />
        </PanelLayout>
    )
}

export default MyCompanyPage;