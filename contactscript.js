const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const DB = require("nedb-promises");

const ContactDB = DB.create("contact.db");
const cors = require("cors");
app.use(cors());

// Middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 



app.post("/contact_me", (req, res) => {
    
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please fill in all fields." });
    }

   
    ContactDB.insert({ name, email, message, timestamp: new Date() })
        .then(() => {
            res.status(200).json({ success: "Message sent successfully!" });
        })
        .catch(err => {
            res.status(500).json({ error: "Failed to save message." });
        });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.post("/contact_me", (req, res) => {
    console.log(req.body); 
   
});

