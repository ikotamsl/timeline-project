import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {collAuth} from "../router";
import {bossAuth} from "../router";

const AuthRouter = () => {

    const isBoss = false;

    return (
        <Switch>
            {isBoss === true && bossAuth.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {collAuth.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}

        </Switch>
    );
};

export default AuthRouter;