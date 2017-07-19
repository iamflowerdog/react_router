/**
 * APP.js 主组件，路由链接组件
 */

import React from "react";

import {Link} from "react-router";

export default function App(props) {
    return (
        <div>
            <h1 style={{textAlign: "center", color: "orange"}}>Fuck the React-router!</h1>

            <ul>
                <li>
                    <Link to="/about" activeClassName="active">About</Link>
                </li>

                <li>
                    <Link to="/repos" activeClassName="active">Repos</Link>
                </li>
            </ul>

            {/*props.children属性指向当前的路由组件，children指向当前的路由*/}
            {props.children}
        </div>
    )
}
