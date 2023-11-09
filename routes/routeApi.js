//imports the dependencies
const path = require('path');
const fs = require('fs');
var uniqid = require('uniqid');

module.exports = (app) => {
    //reads the db.json file and all saved notes using the GET request
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    //adds new notes to the db.json when receiving new notes, shows the client their new notes when submitted
    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);

        let userNote = {
            title: req.body.title,
            text: req.body.text,

            id: uniqid(),
        };

        //pushes the created notes to db.json
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    })

};