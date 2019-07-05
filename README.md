# PROJECT ESOKO API TEST

## Requirements

For development, you will only need Node.js installed on your environement.
SERVER with MySql Database in my case, i use locally installed xampp.

### Node & GIT Bash $ XAMPP Server

[Node](http://nodejs.org/),  [GIT](https://git-scm.com/downloads)  and [XAMPP](https://www.apachefriends.org/index.html) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node -v
    v10.15.3

    $ npm -v
    6.4.1

## Install Project

    $git clone https://github.com/khobbie/esoko_test_api.git
    $ cd PROJECT
    $ npm install
    $ npm install nodemon -g

* To run node server which has a hot reloader from nodemon.
          $ nodemon server.js

## MySql Database

* Create datbase 'pms_db' and import the sql file.

         /migration/pms_db.sql

## RESTful URLs

* Retrieve Every person :
  * GET <http://localhost:3000/person>

* Retrieve person with id :
  * GET <http://localhost:3000/person/:id>

* Save a new Person :
  * POST <http://localhost:3000/person/add>
* Update Person with id and person info
  * PUT <http://localhost:3000/person>
* Delete a person with  person id
       *  DELETE <http://localhost:3000/person>
                {"person_id": "1"}
* Retrieve Every Group
  * GET <http://localhost:3000/group>

* Retrieve Group with group id
  * GET <http://localhost:3000/group/:id>
* Create a group
  * POST <http://localhost:3000/group/add>
* ASSIGN GROUP TO PERSON
  * POST <http://localhost:3000/assign_group>
* Update Group with id
  * PUT <http://localhost:3000/group>
* Search for a group with name  and get its people
  * GET <http://localhost:3000/assign_group/group/:group_name>
