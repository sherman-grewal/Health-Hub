import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import { Notifications} from "./components";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.css";
import "./assets/css/demo.css";
import Firebase, {FirebaseContext} from './variables/firebase';
import indexRoutes from "./routes/index.jsx";
import PatientInfo from "./views/PatientInfo/PatientInfo";

const hist = createBrowserHistory();


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} key={key} component={prop.component}/>;
                })}
            </Switch>
        </Router>
        <Notifications msg={"helloooo"}/>
    </FirebaseContext.Provider>,
    document.getElementById("root")
);


// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
