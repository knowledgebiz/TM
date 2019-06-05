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
const Workers = require('../routes/Workers');
app.use('/api',Workers);
//Route for Entities
const Entity = require('../routes/Entities');
app.use('/api',Entity);

//Just to see if the server is running + Port
app.listen(port, function(){
  console.log("Server is running in" + port)
})
