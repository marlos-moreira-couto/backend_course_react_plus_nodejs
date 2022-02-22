const express = require("express");
const app = express();

const USERS = [
    {usename: 'marlos',name:'Nicole Cunha Ferreira'},
    {usename: 'pedro',name:'André Barbosa Castro'},
    {usename: 'karine',name:'Bruna Azevedo Lima'},
];

function hello(){
    return HELLO;
}

function getUsers(){
    return USERS;
}

const HELLO = {MSG: 'Hello curso react sem body-parser!!'};

app.use(express.json());

app.get("/",function (req,res){
    res.send(hello());
});

app.get("/users",function (req,res){
    res.send(getUsers());
});

app.listen(5000,function(){
    console.log("Hello curso react");
});


