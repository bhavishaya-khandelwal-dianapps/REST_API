const express = require("express");
const app = express();
const { config } = require("dotenv");
config();
const router = require("./routers/student.js");

const PORT = process.env.PORT || 3000;


require("./db/connection.js");


app.use(express.urlencoded({
    extended : true 
}));

app.use(express.json());


app.use(router);


const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});