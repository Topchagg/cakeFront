import HomeOpenSection from "../sections/homeOpenSection"
import HomeAboutUsSection from "../sections/homeAboutUsSection"
import HomeChooseUsSection from "../sections/homeChooseUsSection"
import HomeCatalogSection from "../sections/homeCatalogSection"
import HomeCommentsSection from "../sections/homeCommentsSection"
import HomeBestsellerSection from "../sections/homeBestsellerSection"
import HomeIndividualOrderSection from '../sections/homeIndividualOrderSection'

import '../styles/homeAboutUsSection.css'
import '../styles/homeBestsellerSection.css'
import '../styles/homeCatalogSection.css'
import '../styles/homeChooseUsSection.css'
import '../styles/homeCommentsSection.css'
import '../styles/homeIndividualOrderSection.css'
import '../styles/homeOpenSection.css'



function HomePage () {



    return (
        <>
            <HomeOpenSection/>
            <HomeAboutUsSection/>
            <HomeChooseUsSection/>
            <HomeCatalogSection/>
            <HomeCommentsSection/>
            <HomeBestsellerSection/>
            <HomeIndividualOrderSection/>
        </>
    )
}

export default HomePage