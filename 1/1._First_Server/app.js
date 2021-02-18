const express = require("express");
const app = express();


const users = [{id: '1', name: 'Mark'}, {id: '2', name: 'Elizabeth'}, {id: '3', name:'Sam'}]

app.get("/", (req, res) => {
    res.send({ message: "Nothing specific" });
});

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    let id = req.params.id;

    res.send(users.find(user => user.id === id));
});

app.listen(8081);