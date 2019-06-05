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
const Workers = require('../routes/Workers');
app.use('/api',Workers);

const Entity = require('../routes/Entities');
app.use('/api',Entity);


app.listen(port, function(){
  console.log("Server is running in" + port)
})
