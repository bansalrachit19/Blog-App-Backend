const express = require("express");

const app = express();

require("dotenv").config();

PORT = process.env.PORT || 5000;

app.use(express.json());

const blog = require("./routes/Blog");

app.use("/api/v1", blog);

const dbConnect = require("./config/database");
dbConnect();

app.listen(5000, () => {
    console.log("app is running succesfully");
})