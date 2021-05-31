const mysql =require('mysql');
const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysqlConnection = require('./connection')

const resultRoutes = require("./routes/testresult");

var app =express();

app.use(bodyParser.json());
app.use(cors())
app.use("/result", resultRoutes);


app.listen(3000);