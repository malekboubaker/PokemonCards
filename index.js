//importer express
const express = require ("express");
const USERS = require ("./USERS.js");
const cors = require ("cors");

//creration du serveur 
const app = express();
const port = 8000;

//middle ware
app.use(cors());

//controller
app.get("/", (req, res) => {
    res.status(200).json(USERS);
});
 
//search
app.get("/search", (req, res) => {
    name = req.query.name
    let users = USERS.filter(user=>user.name.toLowerCase().includes(name.toLowerCase()))
    res.json(users);
});

//single user 
app.get("/:id", (req, res) => {
    let user = USERS.find((user) => user.id == req.params.id);
    //error handling server side
    if (!user) {
        res.status(404).json({msg: "user not found"});
        return; 
    };
    res.json(user);
});


app.listen(port, () => {
    console.log(`listening on port ${port} ...`);
});