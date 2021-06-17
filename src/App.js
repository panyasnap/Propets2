import React, {useEffect} from "react";
import './App.css';
import StartPage from "./components/StartPage";
import {connect, useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/account/action";
import Home from "./components/Home";
import {Redirect, Route, Switch} from 'react-router-dom'
import {bindActionCreators} from "redux";

const App = (props) => {
 const dispatch = useDispatch();
const x_token = useSelector(state => state.account.x_token)

    useEffect(() => {
        let x_tokinLocal = localStorage.getItem('token');
        let emailLocal = localStorage.getItem('email')
        if (x_tokinLocal && emailLocal) {
            dispatch(getUser(x_tokinLocal, emailLocal))
        }
    }, [])


    // if (props.token) {
    //     return <StartPage/>
    // } else {
    //     return <Home/>
    // }

    return (
        <Switch>
            <Route exact path={['/home',`/home/:page`]} render={({match}) =>
                x_token ? <Home page={match.params.page}/> : <Redirect to='/main'/>}/>
            <Route exact path={['/', '/main']} render={() =>
                x_token ? <Redirect  to={'/home'}/> : <StartPage/>}/>
                <Route>
                    <h1>Error</h1>
                </Route>
        </Switch>
    )

}

export default App;
// const mapStateToProps = state =>
// {
//     return {
//         token: state.token,
//         // message: state.message
//
//     }
// }
// const mapDispatchToProps = dispatch =>
// {
//     return bindActionCreators({
//         getUser
//     }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
