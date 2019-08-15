import * as React from 'react'
import {Route, Switch} from "react-router";

import {LoginPassword} from "./Account/LoginPassword";
import {ContainerAll} from "./ContainerAll";


export const Main=()=>{
    return(
        <main>
            <Switch>
                <Route exact path='/' component={LoginPassword}/>
                <Route path={'/ContainerAll'} component={ContainerAll}/>

            </Switch>
        </main>
    )
}