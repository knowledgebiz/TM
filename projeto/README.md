
# TeamManagement<br>

## Read me

1. Required
For this project you will need the database included in the project folder, nodejs, express,
sequelize, body-parser and angular <br>

2. Installation
First you need to clone this project from github, after you do that, make sure you run the command npm install,to get all the modules required to make this work.<br> Next what you will do is, foward engineer to get the code of the database. If the database doesn't work make sure that you delete all "VISIBLE" from the code provided in mysql workbench. Also you need to insert some data into the db.<br>

<table>
<tr>
<th>
This is to make sure you can create Workers:<br>
Experience Levels Id - Use exp API,<br>
Department Id - Use depart API,<br>
Position Id - Use position API,<br>
Type Id - Use types API.<br>

This is to make sure you can create Entities:<br>
Entities Types - Use entitiesT API.<br>

This is to make sure you can create Teams:<br>
Entities Id - Use entity API.<br>

This is to make sure you can add worker job preferences:<br>
Workers Id - Use workers API,<br>
Role Id - Use Roles API,<br>
Experience Levels Id - Use exp API,<br>
Job Type - Use jobT API. <br>

This is to make sure you can add vacancies:<br>
Experience Levels Id - Use exp API,<br>
Job Type - Use jobT API,<br>
Role Id - Use Roles API.<br>
</th>
</tr>
</table>

API<br>
Usage
-----<br>
<br>
### Workers

Get all Workers<br>
GET /api/workers HTTP/1.1<br>
Accept: application/json<br>

HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: <br>

<br>

      {
          result: "success",
          documents: [
          {<
            "id": 1,
            "name": "Geremias",
            "email": "geremias@gmail.com",
            "password": "23434jHkikçklk", (only for test proposes)
            "active": 1,
            "createdAt": "2019-06-11 15:27:30",
            "updatedAt": "2019-06-12 11:27:30",
            "entities_id": 1,
            "teams_id": 1,
            "experience_levels_id": 1,
            "department_id": 1,
            "position_id": 1,
            "type_id": 1
          },{
            "id": 2,
            "name": "Malaquias",<
            "email": "malaquias@gmail.com",
            "password": "23434jHkikçklk", (only for test proposes)
            "active": 1,
            "createdAt": "2019-06-12 16:27:30",
            "updatedAt": "2019-06-12 17:27:30",
            "entities_id": 1,
            "teams_id": 1,
            "experience_levels_id": 1,
            "department_id": 1,
            "position_id": 1,
            "type_id": 1
          }]
      }

 <br>
Use this API to POST data.<br> (teams_id, entities_id ,createdAt and updatedAt are not required in the fields)<br>
POST /api/workers<br>

Need to send: <br>

    {
      "id": 2,
      "name": "Malaquias",
      "email": "malaquias@gmail.com",
      "password": "Açucar", 
      "active": 1,
      "entities_id": 1,
      "teams_id": 1,
      "experience_levels_id": 1,
      "department_id": 1,
      "position_id": 1,
      "type_id": 1
    }

Return Codes<br>
TOKEN: "1231894647964971694169276ibdbh1db"<br>
Code	Description<br>
200	Ok(Created)<br>
405	User already exists<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
Updating worker fields<br>
patch /api/workers HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 2,
      "name": "Malaquias",
      "email": "malaquiasG@gmail.com",
    }

<table>
<tr>Response<br>
</tr>
<th>
HTTP/1.1 <br>
200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
404 "User does not exist"<br>
422"Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
</th>
</table>
 
Use this API to delete(active = 0).<br>
<br>
patch /api/<br>
query params: id and active = 0<br>
id && active	Required<br>
Return Payload<br>
If success you will receive 200 code
<br>
<br>


### Entities

Get all entities<br>
GET /api/entity HTTP/1.1<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
      result: "success",
      documents: [
      {
          "id": 1,
          "name": "Knowledge",
          "logo": "folder/folder/folder"
          "email": "knowledge@gmail.com",
          "password": "23434jHkikçklk", (only for test proposes)
          "active": 1,
          "description": "ola",
          "website_url" "Ola.com",
          "entities_types_id": 1,
          "createdAt": "2019-06-11 15:27:30",
          "updatedAt": "2019-06-12 11:27:30",
      },{
          "id": 2,
          "name": "know",
          "logo": "folder/folder/folder"
          "email": "know@gmail.com",
          "password": "23434jHkikçklk", (only for test proposes)
          "active": 1,
          "description": "ola",
          "website_url" "Ola.com",
          "entities_types_id": 1,
          "createdAt": "2019-06-11 15:27:30",
          "updatedAt": "2019-06-12 11:27:30",
      }]
    }

<br>
Use this API to POST data.<br> (description, webite_url , createdAt and updatedAt are not required)<br>
Request<br>
POST /api/entity<br>
Need to send:<br> 

    {
      "id": 1,
      "name": "KnowledgeBiz",
      "logo": "folder/folder/folder"
      "email": "KnowledgeBiz@gmail.com",
      "password": "yo", 
      "active": 1,
      "description": "ola", (optional)
      "website_url" "Ola.com", (optional)
      "entities_types_id": 1,
    }

Return Codes<br>
TOKEN: "1231894647964971694169276ibdbh1db"<br>
Code	Description<br>
200	Ok(Created)<br>
405	"Entitiy already exists"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
4.2<br>
Updating entity fields<br>
patch /api/entity <br>
HTTP/1.1<br>
Accept: application/json<br>

    {
        "id": 2,
        "name": "knowledgebizzz",
        "email": "knowledgebizzz@gmail.com",
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
404 "Entity does not exist"<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
Use this API to delete(active = 0).<br>
Request<br>
patch /api/entity<br>
query params: id and active = 0<br>
id && active	required<br>
Return Payload<br>
If success you will receive 200 code<br>

### EntitiesTypes

Get all EntitiesTypes<br>
GET /api/entities HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
            "id": 1,
            "type": "privada",
        }
    }

<br>

Use this API to POST data.<br>
Request<br>
POST /api/entities<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
            "type": "private",
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
405	"Type already exists"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
Updating department fields<br>
patch /api/entities HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 2,
      "type": "public",
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
404 "Type does not exist"<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
<br>
Use this API to delete.<br>
Request<br>
delete /api/entities<br>
query params: id <br>
id Required<br>
Return Payload<br>
If success you will receive 200 code<br>
### Department 

Get all departments<br>
GET /api/depart HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
            "id": 1,
            "department": "Ola",
            "active": true
        },{
            "id": 2,
            "department": "huio",
            "active": false
        }]
    }

<br>

Use this API to POST data.<br> (createdAt, updatedAt and active)<br>
Request<br>
POST /api/depart<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
            "department": "Ola",
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
405	"Department already exists"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
Updating department fields<br>
patch /api/depart HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 2,
      "department": "Yoda",
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
<br>
Use this API to delete(active = 0).<br>
Request<br>
patch /api/depart<br>
query params: id and active = 0<br>
id && active	Required<br>
Return Payload<br>
If success you will receive 200 code<br>
### Evaluators

Get all Evaluators<br>
GET /api/eva HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
            "id": 1,
            "id_workers": 1,
        }
    }

<br>

Use this API to POST data.<br>
Request<br>
POST /api/eva<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
            "workers_id": 1,
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
<br>
Updating evaluator fields<br>
patch /api/eva HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 2,
      "workers_id": 3,
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
<br>
Use this API to delete<br>
Request<br>
delete /api/eva<br>
query params: id <br>
id Required<br>
Return Payload<br>
If success you will receive 200 code<br>
### ExpLevel

Get all Experience Levels<br>
GET /api/exp HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
            "id": 1,
            "experience_levels": 1,
        }
    }

<br>

Use this API to POST data.<br>
Request<br>
POST /api/exp<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
            "experience_levels": 1,
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
405 "Level already exists"<br>
<br>
Updating experience_level fields<br>
patch /api/exp HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 2,
      "experience_levels": 3,
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
<br>
Use this API to delete<br>
Request<br>
delete /api/exp<br>
query params: id <br>
id Required<br>
Return Payload<br>
If success you will receive 200 code<br>
### JobsPreferences

Get all Job Preferences<br>
GET /api/jobsP HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
            "id": 1,
            "fav_techs": "Angular",
            "disliked_techs": "Nodejs",
            "prefered_industries": "KnowledgeBiz",
            "unwanted_industries": "NULL",
            "workers_id": 1,
            "role_id": 1,
            "experience_levels_id": 1,
            "job_type_id": 1,
            
        }
    }

<br>

Use this API to POST data.<br>
Request<br>
POST /api/jobsP<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
          "fav_techs": "Angular",(Optional)
          "disliked_techs": "Nodejs",(Optional)
          "prefered_industries": "KnowledgeBiz",(Optional)
          "unwanted_industries": "NULL",(Optional)
          "workers_id": 1,
          "role_id": 1,
          "experience_levels_id": 1,
          "job_type_id": 1,
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
<br>
Updating JobsPreferences fields<br>
patch /api/jobsP HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 2,
      "fav_techs": "Angular",
      "disliked_techs": "Nodejs",
      "prefered_industries": "KnowledgeBiz",
      "unwanted_industries": "NULL",
      "workers_id": 1,
      "role_id": 1,
      "experience_levels_id": 1,
      "job_type_id": 1,
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
### JobsTypes

Get all Job Types<br>
GET /api/jobsT HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
          "id": 1,
          "type": "programmer"
        }
    }

<br>

Use this API to POST data.<br>
Request<br>
POST /api/jobsP<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
          "type": "programmer"
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
<br>
Updating Types<br>
patch /api/types HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 2,
      "type" "Web-Designer"
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
### Positions

Get all Job Preferences<br>
GET /api/position HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
            "id": 1,
            "position": "CEO",
        }
    }

<br>

Use this API to POST data.<br>
Request<br>
POST /api/position<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
          "position": "CEO"
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
<br>
Updating Position<br>
patch /api/position HTTP/1.1<br>
Accept: application/json<br>

    {
      "position": "HRMANAGER",
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>
### Roles

Get all Roles<br>
GET /api/roles HTTP/1.<br>
Accept: application/json<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Thursday, 13 June 2019 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>

    {
        result: "success",
        documents: [
        {
            "id": 1,
            "role": "admin",
        }
    }

<br>

Use this API to POST data.<br>
Request<br>
POST /api/roles<br>
Need to send:<br>

     {
        result: "success",
        documents: [
        {
          "role": "admin"
        }
    }

Return Codes<br>
Code	Description<br>
200	Ok(Created)<br>
<br>
Updating Roles<br>
patch /api/roles HTTP/1.1<br>
Accept: application/json<br>

    {
      "id": 1
      "role": "Mod",
    }

Response<br>
HTTP/1.1 200 OK<br>
Content-type: application/json<br>
X-Powered-By: Express<br>
Date: Tue, 29 Aug 2017 11:04:31 GMT<br>
Connection: keep-alive<br>
Transfer-Encondig: chunked<br>
Return Codes<br>
Code	Description<br>
200	Ok(Modified)<br>
422 "Field is missing"<br>
500	Internal Server Error - There was an unexpected error at some point during the processing of the request.<br>
<br>

