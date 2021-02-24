const express = require("express");
const app = express();


app.get("/time", (req, res) => {
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    res.send({time: time});
});

app.get("/day", (req,res) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let weekday = new Date().getDay();
    
    let day = new Date().getDate();

    res.send({weekday: days[weekday - 1], day: day});
})

app.get("/month", (req,res) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = new Date().getMonth();

    res.send({month: months[month]});
})

app.listen(8005);