import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const { data, status } = useSelector((state) => state.user);

    if (status === "loading" || status === "idle") {
        return <></>
    }

    return data ? children : <Navigate to="/signin"/>;
}

export default Protected