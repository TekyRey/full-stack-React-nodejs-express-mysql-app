const express =require('express');
const Router =express.Router();
const mysqlConnection = require('../connection');

const bcrypt = require('bcrypt')
const saltRounds=10

Router.get('/', (req, res)=>{
    mysqlConnection.query("SELECT * FROM login", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err)
        }
    })
})

Router.post('/' , (req, res) => {

    const username= req.body.username
    const password= req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) =>{

        if(err){
            console.log(err)
        }

        mysqlConnection.query("INSERT INTO login (username, password) VALUES (?,?)", 
    [username , password], 
    (err, result)=>{
        console.log(err);
    });
    })
    
});

Router.post('/', (req, res) =>{
    const username= req.body.username
    const password= req.body.password

    mysqlConnection.query("SELECT * FROM login WHERE username=?;", 
    [username], 
    (err, result)=>{
        if(err){
        res.send({err: err})
        }


            if(result.length > 0){
                bcrypt.compare(password, result[0].password, (err, response)=>{
                    if(response){
                        res.send(result)
                    }else{
                        res.send({message: "Wrong Username/password combination!!"})
                    }
                })
            }else {
                res.send({message: "User does not exist"})
            }
        
    });
})




module.exports = Router;