/**
 * Created by yangy on 2017/7/18.
 */
const jsonServer = require("json-server");
const axios = require("axios");

//请求rest接口，获取数据
    //获取多条数据，数据库中的collection集合
function getData() {
    axios.get('http://localhost:3000/posts')
        .then((response) => {
            const {data} = response;
            console.log(data);
        });
}

    //获取一条数据，数据中的document对象
function getOneData() {
    axios.get('http://localhost:3000/posts/2')
        .then((response) => {
            const {data} = response;
            console.log(data);
        });
}

//请求rest接口，增加数据
function addData() {
    axios.post("http://localhost:3000/posts", {hero: "invoker", age: 19})
        .then((response) => {
            const {data} = response;
            console.log(data);
        });
}

//addData();

//axios.post("http://localhost:3000/posts", {hero: "axe", age: 28});






//请求rest接口，删除数据

function deleteOne() {
    axios.delete("http://localhost:3000/posts/3")
        .then((response) => {
            const {data} = response;
            console.log(data);
        });
}


//请求rest接口，更新数据
function update() {
    axios.put("http://localhost:3000/posts/3", {hero: "am", age:58})
        .then((response) => {
            const {data} = response;
            console.log(data);
        })
}


update();
