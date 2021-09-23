import express from "express";
import cors from "cors";
import config from "./config";
import { Query } from "./AllRoutes/Query";
import { Create } from "./AllRoutes/Create";

const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("get shwifty")
})

app.get("/usersRides/:id", (req, res) => {
    const { id } = req.params;
    res.json(Query.QueryUser(id));
})

app.get("/queryRide/:transportationId", (req, res) => {
    const { transportationId } = req.params;
    res.json(Query.QueryRide(transportationId));
})

app.post("/CreateUser", (req, res) => {
    console.log("here")
    console.log(req.body)
    const { firstName, lastName, identityCard, userType, courseName } = req.body;
    res.json(Create.CreateUser(firstName, lastName, identityCard, userType, courseName));
})

app.post("/CreateRide", (req, res) => {
    const { numberOfSeats, numberOfTakenSeats, driverName, driverPhone, routeId } = req.body;
    res.json(Create.CreateRide(numberOfSeats, numberOfTakenSeats, driverName, driverPhone, routeId));
})

app.post("/Login", (req, res) => {
    const { username, password } = req.body;
    res.json(username === "bar" && password === "bar")
})
app.listen(config.port, () => console.log(`Server started on port ${config.port}`))