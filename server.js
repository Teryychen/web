var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");
var DB = require("nedb-promises");


var ProfolioDB = DB.create(__dirname + "/profolio.db");
var ContactDB = DB.create(__dirname + "/contact.db");


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(fileUpload({ defCharset: 'utf8', defParamCharset: 'utf8' }));


server.use("/Picture", express.static(__dirname + "/Picture"));


ProfolioDB.insert([
  { { id: "#Maya Project 1", imgSrc: "/Picture/maya1.jpg" },
  { id: "#Maya Project 2", imgSrc: "/Picture/maya2.jpg" },
  { id: "#Maya Project 3", imgSrc: "/Picture/maya3.jpg" },
  { id: "#Maya Project 4", imgSrc: "/Picture/maya4.jpg" },
  { id: "#Maya Project 5", imgSrc: "/Picture/maya5.jpg" },
  { id: "#Maya Project 6", imgSrc: "/Picture/maya6.jpg" },
  { id: "#Maya Project 7", imgSrc: "/Picture/maya7.jpg" },
  { id: "#Maya Project 8", imgSrc: "/Picture/maya8.jpg" },

 
  { id: "#Photoshop Project 1", imgSrc: "/Picture/photoshop1.jpg" },
  { id: "#Photoshop Project 2", imgSrc: "/Picture/photoshop2.jpg" },
  { id: "#Photoshop Project 3", imgSrc: "/Picture/photoshop3.jpg" },
  { id: "#Photoshop Project 4", imgSrc: "/Picture/photoshop4.jpg" },
  { id: "#Photoshop Project 5", imgSrc: "/Picture/photoshop5.jpg" },
  { id: "#Photoshop Project 6", imgSrc: "/Picture/photoshop6.jpg" },
  { id: "#Photoshop Project 7", imgSrc: "/Picture/photoshop7.jpg" },
  { id: "#Photoshop Project 8", imgSrc: "/Picture/photoshop8.jpg" },}  
]);


server.get("/services", (req, res) => {
  var Services = [
    { modal: "#Maya Project 1", imgSrc: "/Picture/13.jpg" },
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

// Endpoint: Nhận dữ liệu từ form liên hệ
server.post("/contact_me", (req, res) => {
  ContactDB.insert(req.body);
  res.redirect("/#contact");
});

server.listen(4000, () => {
    console.log("Server is running at port 4000.");
});
  