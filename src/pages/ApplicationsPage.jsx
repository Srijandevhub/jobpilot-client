import Applications from "../components/Admin/Applications/Applications"
import PanelLayout from "../layouts/PanelLayout"

const ApplicationsPage = () => {
    return (
        <PanelLayout activeMenu={"jobs"}>
            <Applications />
        </PanelLayout>
    )
}

export default ApplicationsPage