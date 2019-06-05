module.exports = async() => {
const workers = require('../models/Workers');
const entities = require('../models/Entities');
const cv = require('../projeto/models/CV');
const entities_type = require('../projeto/models/Entities_Types');
const evaluators = require('../projeto/models/Evaluators');
const expLevels = require('../projeto/models/ExpLevels');
const jobsP = require('../projeto/models/JobsP');
const jobType = require('../projeto/models/JobType');
const roles = require('../projeto/models/Roles');
const teams = require('../projeto/models/Teams');
const vacancies = require('../projeto/models/Vacancies');
const workersInfo = require('../projeto/models/WorkersInformation');

//Relations 
entities.hasMany(workers, {as: 'Workers', foreignKey:'entities_id'})
workers.belongsTo(entities, {as: 'Entity' , foreignKey:'entities_id'})
teams.hasMany(workers, {as: 'Workers', foreignKey:'teams_id'})
workers.belongsTo(teams, {as: 'Team' , foreignKey:'teams_id'})
evaluators.belongsTo(workers, {as: 'Evaluator' , foreignKey:'workers_id'})
cv.belongsTo(workers, {as: 'CV' , foreignKey:'workers_id'})
jobsP.belongsTo(workers, {as: 'JobPrefrence' , foreignKey:'workers_id'})
workersInfo.belongsTo(workers, {as: 'workers_informations' , foreignKey:'workers_informations_id'})
expLevels.belongsTo(workers, {as: 'ExperienceLevel' , foreignKey:'experience_levels_id'})

jobsP.hasOne(expLevels, {as: 'ExperienceLevel' , foreignKey:'experience_levels_id'})
jobsP.hasOne(jobType, {as: 'JobType' , foreignKey:'job_type_id'})
jobsP.hasOne(roles, {as: 'Roles' , foreignKey:'role_id'})

vacancies.hasOne(expLevels, {as: 'ExperienceLevel' , foreignKey:'experience_levels_id'})
vacancies.hasOne(jobType, {as: 'JobType' , foreignKey:'job_type_id'})
vacancies.hasOne(roles, {as: 'Role' , foreignKey:'roles_id'})
vacancies.belongsTo(entities, {as: 'Vacancies' , foreignKey:'entities_id'})

entities.hasOne(entities_type, {as: 'EntitieType' , foreignKey:'entities_types_id'})
entities.hasOne(teams, {as: 'ExperienceLevel' , foreignKey:'experience_levels_id'})
entities.hasMany(vacancies, {as: 'Vacancies' , foreignKey: 'entities_id'})



}