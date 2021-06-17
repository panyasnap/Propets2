import React from 'react';
import PostPage from "./postPage/PostPage";
import {
    addNewPostPage,
    changeUserPage,
    favoritesPage,
    FosteringPage,
    FoundPetPage,
    foundPetPage,
    HotelsPage,
    LostPetPage,
    lostPetPage,
    VetHelpPage,
    WalkingPage
} from "../../utils/constans";
import LostPet from "./lostFound/LostPet";
import FoundPet from "./lostFound/FoundPet";
import Favorites from "./Favorites";
import AddNew from "./postPage/AddNew";
import ChangeUser from "./ChangeUser";
import Hotels from "./navigation/Hotels";
import Walking from "./navigation/Walking";
import VetHelp from "./navigation/VetHelp";
import Fostering from "./navigation/Fostering";
import FoundPetForm from "./lostFound/FoundPetForm";
import LostPetForm from "./lostFound/LostPetForm";


const HomePage = (props) => {
    switch (props.page) {
        case lostPetPage:
            return<LostPet/>
        case foundPetPage:
            return <FoundPet/>
        case favoritesPage:
            return <Favorites/>
        case addNewPostPage:
            return<AddNew/>
        case changeUserPage:
            return <ChangeUser/>
        case HotelsPage:
            return <Hotels/>
        case WalkingPage:
            return <Walking/>
        case FosteringPage:
            return <Fostering/>
        case VetHelpPage:
            return <VetHelp/>
        case LostPetPage:
            return <LostPetForm/>
        case FoundPetPage:
            return <FoundPetForm/>
        default:
            return <PostPage/>

    }

}


export default HomePage;

