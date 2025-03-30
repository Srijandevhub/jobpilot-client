import MainHeader from "../components/MainHeader/MainHeader"

const MainLayout = ({ children }) => {
    return (
        <>
        <MainHeader />
        { children }
        </>
    )
}

export default MainLayout