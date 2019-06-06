const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
//Route for Workers
const routes = require('../routes');
//const Workers = require('../routes/Workers');
//app.use('/api',Workers);
app.use('/api',routes.workers);
//Route for Entities
//const Entity = require('../routes/Entities');
//app.use('/api',Entity);
app.use('/api',routes.entities)

//Just to see if the server is running + Port
app.listen(port, function(){
  console.log("Server is running in" + port)
})
