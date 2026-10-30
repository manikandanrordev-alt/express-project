const express = require("express");
const app = express();
app.use(express.json());

let students = [{
    "id": 21,
    "name": "Mani",
    "subject": "Tamil",
    "mark": 99
}]

app.listen(8081, () => {
    console.log('Students Mark Portal running');
});

app.get("/students", (req, res) => {
    res.status(200).json({"student_count": students.length, data: students})
});

app.post("/students", (req,res) => {
    
    try {
        const {name, subject, mark } = req.body;
    
        if(!name || !subject || !mark) {
            res.status(400).json({"message": "Name, Subject and Mark are required "});
        }
        let newStudent = [{
            id: Date.now(), name, subject, mark
        }]

        students.push(newStudent);
        res.status(201).json({"message": "Students data created"});
    } catch(err) {
        console.error(err);
        res.status(500).json({"message": "Something Went Wrong"})
    }
});