import MainHeader from "../components/MainHeader/MainHeader"

const MainLayout = ({ children, menuActive }) => {
    return (
        <>
        <MainHeader menuActive={menuActive}/>
        { children }
        </>
    )
}

export default MainLayout
