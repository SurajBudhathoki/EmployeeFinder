//require dependencies
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

//setting up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//set the server to use the public directory
app.use(express.static(path.join(__dirname, 'public')));


//Routes

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);







//Listener
app.listen(PORT, function(){
    console.log("The port is: " + PORT);

});