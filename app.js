const express = require('express');
const app = express();
const ejsMate = require("ejs-mate");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})


app.listen(8888, () => {
    console.log("server is listing to port 8888");
});