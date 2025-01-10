var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");
var DB = require("nedb-promises");
var ProfolioDB = require("nedb-promises"); 



var ProfolioDB = DB.create(__dirname + "/profolio.db");
var ContactDB = DB.create(__dirname + "/contact.db");


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(fileUpload({ defCharset: 'utf8', defParamCharset: 'utf8' }));


server.use(express.static(__dirname + "/index"));


/*ProfolioDB.insert([
   { id: "#Maya Project 1", imgSrc: "/Picture/13.jpg" },
  { id: "#Maya Project 2", imgSrc: "/Picture/14.jpg" },
  { id: "#Maya Project 3", imgSrc: "/Picture/12.jpg" },
  { id: "#Maya Project 4", imgSrc: "Picture/gr4.png" },
  { id: "#Maya Project 5", imgSrc: "/Picture/gr5.png" },
  { id: "#Maya Project 6", imgSrc: "/Picture/gr3.png" },
  { id: "#Maya Project 7", imgSrc: "/Picture/water5.png" },
  { id: "#Maya Project 8", imgSrc: "/Picture/water4.png" },

 
  { id: "#Photoshop Project 1", imgSrc: "/Picture/magic.png" },
  { id: "#Photoshop Project 2", imgSrc: "/Picture/water.png" },
  { id: "#Photoshop Project 3", imgSrc: "/Picture/water2.png" },
  { id: "#Photoshop Project 4", imgSrc: "/Picture/Brown.jpg" },
  { id: "#Photoshop Project 5", imgSrc: "/Picture/1.png" },
  { id: "#Photoshop Project 6", imgSrc: "/Picture/9.jpeg" },
  { id: "#Photoshop Project 7", imgSrc: "/Picture/3.jpg" },
  { id: "#Photoshop Project 8", imgSrc: "/Picture/gr2.png" },  
]);*/


server.get("/services", (req, res) => {
  var Services = [
    { modal: "#Maya Project 1", imgSrc: "/Picture/13.jpg" },
     { modal: "#Maya Project 2", imgSrc: "/Picture/14.jpg"},
      {modal: "#Maya Project 3", imgSrc: "/Picture/12.jpg"},
      {modal: "#Maya Project 4", imgSrc: "Picture/gr4.png"},
      {modal: "#Maya Project 5", imgSrc: "/Picture/gr5.png"},
      {modal: "#Maya Project 6", imgSrc: "/Picture/gr3.png"},
      {modal: "#Maya Project 7", imgSrc: "/Picture/water5.png"},
      {modal: "#Maya Project 8", imgSrc: "/Picture/water4.png"},    
   
  ];
  res.send(Services);
});


server.get("/profolio", (req, res) => {
  ProfolioDB.find({}).then(results => {
    if (results != null) {
      res.send(results);
    } else {
      res.send("Error!");
    }
  });
});


server.post("/contact_me", (req, res) => {
  ContactDB.insert(req.body);
  res.redirect("/#contact");
});

server.listen(3000, () => {
    console.log("Server is running at port 3000.");
});
  