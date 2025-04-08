import PostJob from "../components/Admin/PostJob/PostJob"
import PanelLayout from "../layouts/PanelLayout"

const PostJobPage = () => {
    return (
        <PanelLayout activeMenu={"postajob"}>
            <PostJob />
        </PanelLayout>
    )
}

export default PostJobPage