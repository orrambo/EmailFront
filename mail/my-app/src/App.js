import {BrowserRouter, Route, Switch} from "react-router-dom";
import InboxPage from "./pages/InboxPage";
import React from "react";
import './App.css'
import Navigation from "./pages/Navigation";
import {LoginPage} from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ChangeProfile from "./pages/ChangeProfile";
import SendPage from "./pages/SendPage";
import SpamPage from "./pages/SpamPage";
import TrashPage from "./pages/TrashPage";
import MailPage from "./pages/MailPage";
import { MailsProvider } from "./contexts";

function App() {

    return (
        <BrowserRouter basename="/" >
            <Route>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route path="/registration">
                    <RegistrationPage/>
                </Route>
                <Route path="/change_profile">
                    <Navigation/>
                    <ChangeProfile/>
                </Route>
                <Route path="/inbox">
                    <MailsProvider>
                    <Navigation/>
                    <InboxPage></InboxPage>
                    </MailsProvider>
                </Route>
                <Route path="/send">
                    <Navigation/>
                    <SendPage></SendPage>
                </Route>
                <Route path="/spam">
                    <Navigation/>
                    <SpamPage></SpamPage>
                </Route>
                <Route path="/trash">
                    <Navigation/>
                    <TrashPage></TrashPage>
                </Route>
                <Route path="/mail/:id">
                    <Navigation/>
                    <MailPage></MailPage>
                </Route>
            </Route>
        </BrowserRouter>
    );
}

export default App;