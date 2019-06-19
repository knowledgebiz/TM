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
app.use('/api',routes.workers);
app.use('/api', routes.entities);
app.use('/api',routes.department);
app.use('/api',routes.vacancies)
app.use('/api',routes.entitiesT)
app.use('/api',routes.expL)
app.use('/api',routes.jobsP)
app.use('/api',routes.jobsT)
app.use('/api',routes.types)
app.use('/api',routes.positions)
app.use('/api',routes.roles)
app.use('/api',routes.teams)
app.use('/api',routes.evaluators)
app.use('/api',routes.cv)



//Just to see if the server is running + Port
app.listen(port, function(){
  console.log("Server is running in" + port)
})
