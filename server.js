const express = require("express");
const path = require("path");


const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})


app.get("/api/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, ".html"))
});

app.get("/api/waitinglist", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.listen(PORT, function () {
    console.log(`At listening on ${PORT}...`)
})
