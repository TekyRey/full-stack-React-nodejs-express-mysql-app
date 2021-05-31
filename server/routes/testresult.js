const express =require('express');
const Router =express.Router();
const mysqlConnection = require('../connection');

Router.get('/', (req, res)=>{
    mysqlConnection.query("SELECT * FROM testResult", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err)
        }
    })
})

// Router.post('/' , (req, res) => {

//     const username= req.body.username
//     const password= req.body.password

//     mysqlConnection.query("INSERT INTO login (username, password) VALUES (?,?)", 
//     [username , password], 
//     (err, result)=>{
//         console.log(err);
//     });
// });

// Router.post('/testresult' , (req, res) => {
//     let sql = 'INSERT INTO testResult SET ?'
//     let post = {
//         id: req.body.id,
//         email: req.body.email,
//         fullName : req.body.fullname,
//         age: req.body.age,
//         gender: req.body.gender,
//         address: req.body.address,
//         postcode: req.body.postcode,
//         TTNCode: req.body.ttncode,
//         testResult: req.body.testresult
//     }


Router.post('/' , (req, res) => {

    const email = req.body.email
    const fullname= req.body.fullname
    const age = req.body.age
    const gender = req.body.gender
    const address = req.body.address
    const postcode = req.body.postcode
    const ttncode = req.body.ttncode
    const testResult = req.body.testresult

    mysqlConnection.query("INSERT INTO testResult (email, fullname, age, gender, address, postcode, ttncode, testResult) VALUES (?,?,?,?,?,?,?,?)", 
    [email , fullname, age, gender, address, postcode, ttncode, testResult], 
    (err, result)=>{
        console.log(err);
        
    });


    // mysqlConnection.query(sql, post, (err, res) => {
    //     if(err) throw err;
    //     console.log('success');
    //     // console.log(res);
    // });

});


module.exports = Router;