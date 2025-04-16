import MyProfile from "../components/Admin/MyProfile/MyProfile"
import PanelLayout from "../layouts/PanelLayout"

const MyProfilePage = () => {
    return (
        <PanelLayout activeMenu={"myprofile"}>
            <MyProfile />
        </PanelLayout>
    )
}

export default MyProfilePage;