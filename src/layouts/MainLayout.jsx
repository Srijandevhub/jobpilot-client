import MainHeader from "../components/MainHeader/MainHeader"

const MainLayout = ({ children, menuActive, panel }) => {
    return (
        <>
        <MainHeader menuActive={menuActive} panel={panel}/>
        { children }
        </>
    )
}

export default MainLayout
