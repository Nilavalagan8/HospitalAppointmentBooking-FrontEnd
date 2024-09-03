const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const routes = require("./server/routes/hosrout");
// require('dodenv').config();

const app = express();
const port = 5000;



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static("public"));

const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

app.use('/',routes);

 app.listen(port,()=>{
    console.log(port);
 });

 