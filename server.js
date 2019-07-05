var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mysql = require('mysql')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

// default route
app.get('/', function(req, res) {
        return res.send({
            error: true,
            message: 'hello'
        })
    })
    // connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pms_db'
})

// connect to database
dbConn.connect()

// Retrieve EveryOne
app.get('/person', function(req, res) {
    dbConn.query('SELECT * FROM pms_person_info', function(
        error,
        results,
        fields
    ) {
        if (error) throw error
        return res.send({
            error: false,
            data: results,
            message: 'People list.'
        })
    })
})

// Retrieve person with id
app.get('/person/:id', function(req, res) {
    let person_id = req.params.id

    if (!person_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide person_id'
        })
    }

    dbConn.query(
        'SELECT * FROM pms_person_info where person_id=?',
        person_id,
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results[0],
                message: 'People list.'
            })
        }
    )
})

// Add a new Person
app.post('/person/add', function(req, res) {
    let person_first_name = req.body.person_first_name
    let person_last_name = req.body.person_last_name
    let person_email = req.body.person_email
    let person_phone_no = req.body.person_phone_no
    let person_gender = req.body.person_gender
    let person_age = req.body.person_age
    let person_picture = req.body.person_picture
    let person_country = req.body.person_country
    let person_address = req.body.person_address
    let person_occupation = req.body.person_occupation
    let person_hobbies = req.body.person_hobbies
    let person_comment = req.body.person_comment

    if (!req.body) {
        return res.status(400).send({
            error: true,
            message: 'Please provide person'
        })
    }
    dbConn.query(
        'INSERT INTO pms_person_info SET ? ', {
            person_first_name: person_first_name,
            person_last_name: person_last_name,
            person_email: person_email,
            person_phone_no: person_phone_no,
            person_gender: person_gender,
            person_age: person_age,
            person_picture: person_picture,
            person_country: person_country,
            person_address: person_address,
            person_occupation: person_occupation,
            person_hobbies: person_hobbies,
            person_comment: person_comment
        },
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results,
                message: 'New person has been created successfully.'
            })
        }
    )
})

//  Update Person with id
app.put('/person', function(req, res) {
    let person_id = req.body.person_id
    let person_first_name = req.body.person_first_name
    let person_last_name = req.body.person_last_name
    let person_email = req.body.person_email
    let person_phone_no = req.body.person_phone_no
    let person_gender = req.body.person_gender
    let person_age = req.body.person_age
    let person_picture = req.body.person_picture
    let person_country = req.body.person_country
    let person_address = req.body.person_address
    let person_occupation = req.body.person_occupation
    let person_hobbies = req.body.person_hobbies
    let person_comment = req.body.person_comment

    if (!person_id) {
        return res.status(400).send({
            message: 'Please provide person details and person_id'
        })
    }
    dbConn.query(
        'UPDATE pms_person_info SET person_first_name = ?, person_last_name = ?, person_email = ?, person_phone_no = ?, person_gender = ?, person_age = ?, person_picture = ?, person_country = ?, person_address = ?, person_occupation = ?, person_hobbies = ?, person_comment = ? WHERE person_id = ?', [
            person_first_name,
            person_last_name,
            person_email,
            person_phone_no,
            person_gender,
            person_age,
            person_picture,
            person_country,
            person_address,
            person_occupation,
            person_hobbies,
            person_comment,
            person_id
        ],
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results,
                message: 'person has been updated successfully.'
            })
        }
    )
})

//  Delete a person with  person id
app.delete('/person', function(req, res) {
    let person_id = req.body.person_id
    if (!person_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide person_id'
        })
    }
    dbConn.query(
        'DELETE FROM pms_person_info WHERE person_id = ?', [person_id],
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results,
                message: 'Person has been updated successfully.'
            })
        }
    )
})

// Retrieve Every Group
app.get('/group', function(req, res) {
    dbConn.query('SELECT * FROM pms_group', function(error, results, fields) {
        if (error) throw error
        return res.send({
            error: false,
            data: results,
            message: 'Group list.'
        })
    })
})

// Retrieve Group with group id
app.get('/group/:id', function(req, res) {
    let group_id = req.params.id

    if (!group_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide group_id'
        })
    }

    dbConn.query('SELECT * FROM pms_group where group_id=?', group_id, function(
        error,
        results,
        fields
    ) {
        if (error) throw error
        return res.send({
            error: false,
            data: results[0],
            message: 'Group list.'
        })
    })
})

// Creat a group
app.post('/group/add', function(req, res) {
    let group_name = req.body.group_name

    if (!req.body) {
        return res.status(400).send({
            error: true,
            message: 'Please provide Group Detail'
        })
    }
    dbConn.query(
        'INSERT INTO pms_group SET ? ', {
            group_name: group_name
        },
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results,
                message: 'New group has been created successfully.'
            })
        }
    )
})

// ASSIGN GROUP TO PERSON
app.post('/assign_group', function(req, res) {
    let group_id = req.body.group_id
    let person_id = req.body.person_id

    if (!req.body) {
        return res.status(400).send({
            error: true,
            message: 'Please provide Group Detail'
        })
    }
    dbConn.query(
        'INSERT INTO group_assignment SET ? ', {
            group_id: group_id,
            person_id: person_id
        },
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results,
                message: 'Person has been Assign to group successfully.'
            })
        }
    )
})

//  Update Group with id
app.put('/group', function(req, res) {
    let group_id = req.body.group_id
    let group_name = req.body.group_name

    if (!group_id) {
        return res.status(400).send({
            message: 'Please provide group name and group_id'
        })
    }
    dbConn.query(
        'UPDATE pms_group SET group_name = ? WHERE group_id = ?', [group_name, group_id],
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results,
                message: 'Group has been updated successfully.'
            })
        }
    )
})

// Search for a group with name  and get its people
app.get('/assign_group/group/:group_name', function(req, res) {
    let group_name = req.params.group_name

    if (!group_name) {
        return res.status(400).send({
            error: true,
            message: 'Please provide group_name'
        })
    }

    dbConn.query(
        'SELECT pms_person_info.person_first_name, pms_person_info.person_last_name FROM pms_group, pms_person_info, pms_group_assignment where pms_group_assignment.group_id = pms_group.group_id AND pms_group_assignment.person_id = pms_person_info.person_id AND pms_group.group_name = ?',
        group_name,
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results[0],
                message: 'People in the group list.'
            })
        }
    )
})

// Search for a person with name  and get the group he/she belongs to.
app.get('/assign_group/person/:person_name', function(req, res) {
    let person_name = req.params.person_name

    if (!person_name) {
        return res.status(400).send({
            error: true,
            message: 'Please provide person_name'
        })
    }

    dbConn.query(
        'SELECT pms_person_info.person_first_name, pms_person_info.person_last_name FROM pms_group, pms_person_info, pms_group_assignment where pms_group_assignment.group_id = pms_group.group_id AND pms_group_assignment.person_id = pms_person_info.person_id AND pms_group.group_name = ?',
        group_name,
        function(error, results, fields) {
            if (error) throw error
            return res.send({
                error: false,
                data: results[0],
                message: 'Group that person belongs to.'
            })
        }
    )
})

// set port
app.listen(3000, function() {
    console.log('Node app is running on port 3000')
})