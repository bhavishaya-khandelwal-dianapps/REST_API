const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/studentDataBase")
.then(() => {
    console.log(`Connection successful, Go ahead`);
})
.catch((error) => {
    console.log(`Some error occur while connecting and the error is ${error}`);
});