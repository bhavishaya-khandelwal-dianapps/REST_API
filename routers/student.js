const express = require("express");
const router = new express.Router();

const Student = require("../models/students.js");

router.post("/students", async (req, res) => {
    try {
        const createStudent = new Student(req.body);
        console.log(createStudent);
        const result = await createStudent.save();
        res.status(201).send(result);
    }
    catch(error) {
        console.log(error);
    }
});


module.exports = router;