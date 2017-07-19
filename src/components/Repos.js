/**
 * Created by yangy on 2017/7/13.
 */

import React, {Component} from "react";
import {Link} from "react-router";


export default class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [
                {username: "react", repoName: "facebook"},
                {username: "google", repoName: "angular"},
                {username: "vue", repoName: "vueJS"},
                {username: "nike", repoName: "air"}
            ]
        }
    }

    render() {
        const {repos} = this.state;
        //console.log(repos);
        return (
            <div>
                <ul>
                    {
                        repos.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/repos/${item.username}/${item.repoName}`}>{item.username}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                {this.props.children}
            </div>
        )
    }
}
