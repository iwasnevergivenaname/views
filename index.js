const express = require("express");
const app = express();
const path = require("path");
const PORT = 4200;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/html/index.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + "/html/about.html"));
})

app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname + "/html/blog.html"));
})

app.listen(PORT, () => {
    console.log(`you are listening to PORT ${PORT}`);
})