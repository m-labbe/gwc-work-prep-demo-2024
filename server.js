const express = require("express");
const routes = require("./routes/users");

const app = require('./app');
app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
    console.log("Server has started!");
});

module.exports = app;
