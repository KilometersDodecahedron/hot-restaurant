const express = require("express");
const path = require("path");


const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes to html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function (req, res) {

    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));

});


//



//start server
app.listen(PORT, function () {
    console.log(`At listening on ${PORT}...`)
});
