const path = require("path");
const express = require("express");

const app = express();

//define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath); // to give custom directory for views

//Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Nirbhay Gupta",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather App",
    about: "Weather app shares weather detail based on location",
  });
});

app.get("/help", (req, res) => {
  const helpDirectoryPath = path.join(__dirname, "../public/help.html");
  app.use(express.static(helpDirectoryPath));
});

app.get("/weather", (req, res) => {
  res.send("<h1>weather</h1>");
});

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
