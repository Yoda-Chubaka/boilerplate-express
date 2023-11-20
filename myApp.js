let express = require('express');
let app = express();
let bodyParser = require('body-parser');
require('dotenv').config()
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });
// absolutePath = __dirname + '/public'
// app.get("/", (req, res) => {
//   res.sendFile(absolutePath);
// });
// app.use("/public", express.static(absolutePath));
// app.get("/json", (req, res) => {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     response = "Hello json".toUpperCase();
//   } else {
//     response = "Hello json";
//   }
//   res.json({"message": response});
// });
// app.use(function middleware(req, res, next) {
//     var string = req.method + ' ' + req.path + ' - ' + req.ip;
//     console.log(string);
//     next();
// });
// app.get('/now', function(req, res, next) {
//     req.time = new Date().toString()
//     next();
// }, function(req, res) { res.send({ time: req.time }); })
// app.get("/:word/echo", (req, res) => {
//   const { word } = req.params;
//   res.json({
//     echo: word
//   });
// });
// app.get("/name", function(req, res) {
//   var firstName = req.query.first;
//   var lastName = req.query.last;
//   // OR you can destructure and rename the keys
//   var { first: firstName, last: lastName } = req.query;
//   // Use template literals to form a formatted string
//   res.json({
//     name: `${firstName} ${lastName}`
//   });
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended: false}));


app.post('/name',function(req,res){
  // console.log('i am in app post', req.body);
  res.json({"name" : req.body.first +' '+req.body.last});
});




































 module.exports = app;
