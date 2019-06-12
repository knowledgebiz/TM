
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
3.1 <br>
### Workers

Get all users<br>
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

3.2 <br>
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
3.3 <br>
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
3.4 
Use this API to delete(active = 0).<br>
<br>
patch /api/<br>
query params: id and active = 0<br>
id && active	Required<br>
Return Payload<br>
If success you will receive 200 code
<br>
<br>
4.

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

4.1<br>
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
4.3<br>
Use this API to delete(active = 0).<br>
Request<br>
patch /api/entity<br>
query params: id and active = 0<br>
id && active	required<br>
Return Payload<br>
If success you will receive 200 code<br>
5.
### Department 

Get all departments<br>
GET /api/depart HTTP/1.<br
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
5.1<br>
//
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
5.<br>
Updating entity fields<br>
patch /api/entities HTTP/1.1<br>
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
5.3<br>
<br>
Use this API to delete(active = 0).<br>
Request<br>
patch /api/entity<br>
query params: id and active = 0<br>
id && active	Required<br>
Return Payload<br>
If success you will receive 200 code<br>
