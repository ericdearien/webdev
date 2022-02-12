const express = require("express");
const app = express();
const config = require("./config/config.json");
const env = process.env.NODE_ENV;
const configuration = config[env]

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(configuration.port, () => {
    console.log(`App running on port ${configuration.port}`);
});