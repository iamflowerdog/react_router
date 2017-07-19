import React, {Component} from "react";

export default class Repo extends Component{
    render(){
        return(
            <div>
                {/*用来显示Repo组件对应的内容，这个组件要去params里面取*/}
                用户名：{this.props.params.username},
                内容：{this.props.params.repoName}。
            </div>
        )
    }
}