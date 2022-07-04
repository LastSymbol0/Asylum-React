import MainScreen from "./mainScreen/mainScreen"
import WhatScreen from "./whatScreen/whatScreen"
import FeatureScreen from "./featureScreen/featureScreen"
import RoadmapScreen from "./roadmapScreen/roadmapScreen"
import TeamScreen from "./teamScreen/teamScreen"
import MaterialsScreen from "./materialsScreen/materialsScreen"
import PartnersScreen from "./partnersScreen/partnersScreen"
import ContactScreen from "./contactScreen/contactScreen"
import CofoundedBy from "./cofoundedBy/cofoundedBy";

const HomeContent = () => {
    return (
        <>
            <MainScreen/>
            <WhatScreen/>
            <FeatureScreen/>
            <RoadmapScreen/>
            <TeamScreen/>
            <MaterialsScreen/>
            <CofoundedBy/>
            <PartnersScreen/>
            <ContactScreen/>
        </>
    )
}

export default HomeContent
