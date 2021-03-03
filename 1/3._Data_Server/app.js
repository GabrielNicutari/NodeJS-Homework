const express = require("express");
const bodyParser  = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(8081);

app.get("/querystring", (req,res) => {
    res.send(req.query);
})

app.get("/pathvariable/:message/:title", (req,res) => {
    res.send({variable: req.params.message, title: req.params.title});
})

// Homework

let users = [{ id: '1', name: 'Mark' }, { id: '2', name: 'Elizabeth' }, { id: '3', name:'Sam' }]

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:id", (req, res) => {
    let id = req.params.id;

    res.send(users.find(user => user.id === id));
});

app.post("/users", bodyParser.json(), (req, res) => {
    let user = {
        id: `${users.length + 1}`,    //automatically generated
        name: req.body.name
    };

    users.push(user)

    res.send({ user: user });
}); 

app.put("/users/:id", bodyParser.json(), (req, res) => {
    let updatedUser = {
        id: req.params.id,  //should stay unchanged, naturally
        name: req.body.name
    };

    users[req.params.id - 1] = updatedUser; //only works if the ids in the array are unaltered

    res.send({ updatedUser: updatedUser, users: users });
});

app.delete("/users", (req, res) => {
    users.splice(0, users.length);

    res.send("All users have been deleted");
});


app.delete("/users/:id", (req, res) => {
    users.splice(req.params.id - 1, 1);

    res.send("User deleted");
});