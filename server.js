//import dependencies
const express = require('express');

//use express
const app = express();

//creates PORT
const PORT = process.env.PORT || 3001;


//creates a route for files in public
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));//handles data parser
app.use(express.json());


require('./routes/routeApi')(app);
require('./routes/routeHtml')(app);

//app listen
app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
});