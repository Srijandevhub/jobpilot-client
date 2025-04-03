import HomeHero from "../components/HomeHero/HomeHero"
import HowWork from "../components/HowWork/HowWork"
import PopularCategories from "../components/PopularCategories/PopularCategories"
import PopularVacancies from "../components/PopularVacancies/PopularVacancies"
import MainLayout from "../layouts/MainLayout"

const HomePage = () => {
    return (
        <MainLayout>
            <HomeHero />
            <PopularVacancies />
            <HowWork />
            <PopularCategories />
        </MainLayout>
    )
}

export default HomePage
