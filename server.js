var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");
var DB = require("nedb-promises");

// Tạo cơ sở dữ liệu
var PortfolioDB = DB.create(__dirname + "/portfolio.db");
var ContactDB = DB.create(__dirname + "/contact.db");

// Middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(fileUpload({ defCharset: 'utf8', defParamCharset: 'utf8' }));

// Cấu hình đường dẫn tĩnh
server.use(express.static(__dirname + "/Picture"));

// Insert dữ liệu vào cơ sở dữ liệu Portfolio (nếu cần)
/*PortfolioDB.insert([
  { id: "#Maya Project 1", imgSrc: "/Picture/13.jpg" },
  { id: "#Maya Project 2", imgSrc: "/Picture/14.jpg" },
  { id: "#Maya Project 3", imgSrc: "/Picture/12.jpg" },
  { id: "#Maya Project 4", imgSrc: "/Picture/gr4.png" },
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

// API trả về danh sách Portfolio
server.get("/portfolio.db", (req, res) => {
  PortfolioDB.find({}).then((results) => {
    if (results != null) {
      res.send(results);
    } else {
      res.status(500).send("Error retrieving portfolio data!");
    }
  });
});

// API xử lý liên hệ
server.post("/contact-me", (req, res) => {
  ContactDB.insert(req.body).then(() => {
    res.redirect("/#contact");
  }).catch((err) => {
    res.status(500).send("Error saving contact data!");
  });
});

// Khởi động server
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
