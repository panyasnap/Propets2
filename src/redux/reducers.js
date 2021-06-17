import {combineReducers} from "redux";
import {AccountReducer} from "./account/reducer";
import {postReducer} from "./postData/reducer";
import {lostPetReducer} from "./lostPet/reducer";
import {foundPetReducer} from "./foundPet/reducer";
import {activitiesReducer} from "./activities/reducer";
import {favoritesReducer} from "./favorites/reducer";
import {commentReducer} from "./comment/reducer";

const rootReducer = combineReducers({
    account: AccountReducer,
    postData: postReducer,
    lostPet: lostPetReducer,
    foundPet: foundPetReducer,
    activities: activitiesReducer,
    favorites: favoritesReducer,
    comment: commentReducer
})

export default rootReducer

