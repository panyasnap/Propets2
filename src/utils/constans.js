export const base_Url1 = 'https://pro-pets-router.herokuapp.com/account/en/v1'
export const base_url_Post = 'https://propetsapp.herokuapp.com/message/en/v1/'
export const createToken = (login, password) => {
    return `Basic ${btoa(login + ':' + password)}`;
}


export const postPage = 'PostPage';
export const lostPetPage = 'LostPet';
export const foundPetPage = 'FoundPet';
export const favoritesPage = 'Favorites';
export const addNewPostPage = 'NewPost';
export const changeUserPage = 'ChangeUser';
export const HotelsPage ='Hotel';
export const WalkingPage = 'Walking';
export const FosteringPage = 'Fostering';
export const VetHelpPage = 'VetHelp';
export const FoundPetPage = 'FoundForm'
export const LostPetPage = 'LostForm'

//request: header Authorization in Base 64(user+password)
//btoa