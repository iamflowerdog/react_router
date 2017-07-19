/*
    index.js首页入口文件，注册路由，影射关系，path相当于key， component相当于value
    <Route path="about" component={About}/>
 */


import React from "react";
import {render}from "react-dom";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

import App from "./components/App";
import About from "./components/About";
import Home from "./components/Home";
import Repos from "./components/Repos";
import Repo from "./components/Repo";

render((
    /*路由器， history监视路由值的变化，固定的值*/
    <Router history={hashHistory}>
        {/*跟路由组件*/}
        <Route path="/" component={App}>

            <IndexRoute component={Home}/>

            <Route path="about" component={About}/>

            <Route path="Repos" component={Repos}>
                <Route path=":username/:repoName" component={Repo}>

                </Route>
            </Route>
        </Route>

    </Router>
), document.getElementById("root"));

