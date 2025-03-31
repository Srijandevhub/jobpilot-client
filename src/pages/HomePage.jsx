import HomeHero from "../components/HomeHero/HomeHero"
import HowWork from "../components/HowWork/HowWork"
import PopularVacancies from "../components/PopularVacancies/PopularVacancies"
import MainLayout from "../layouts/MainLayout"

const HomePage = () => {
    return (
        <MainLayout>
            <HomeHero />
            <PopularVacancies />
            <HowWork />
        </MainLayout>
    )
}

export default HomePage