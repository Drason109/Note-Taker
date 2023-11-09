//Import Dependencies
const path = require('path');


module.exports = (app) => {

    //returns the notes.html when requested using GET
    app.get('/notes', (req,res) =>{
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //returns the index.html when requesed using GET
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })


};
