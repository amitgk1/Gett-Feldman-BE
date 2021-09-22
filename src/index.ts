import express from "express";
import config from "./config"

const app = express();

app.get('/', (req, res) => {
    res.send("initial route")
})

app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));