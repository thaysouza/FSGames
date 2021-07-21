const express = require('express'), 
    server = express(), 
    cors = require('cors'),
    mysql = require('mysql');

const database = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "fseletro"
})

server.use(cors());
server.use(express.json());

server.get('/',(req,res) => {
    res.end("<html>Hello world</html>")
})

server.get('/produtos', (req,res) =>{
    const sql = "SELECT * FROM produtos";
    database.query(sql, (error, results) =>{
       if(error){
           return error;
       }res.json(results);
    })
})

server.get('/produtoshome', (req,res) =>{
    const sql = "SELECT * FROM produtos where idproduto < 5";
    database.query(sql, (error, results) =>{
       if(error){
           return error;
       }res.json(results);
    })
})

server.get('/msg', (req,res) =>{
    const sql = "SELECT * FROM comentarios";
    database.query(sql, (error, results) =>{
       if(error){
           return error;
       }res.json(results);
    })
})

server.post('/msg', (req,res)=>{
    const {nome, msg} = req.body
    const sql = `insert into comentarios (nome, msg) values ('${nome}','${msg}')`;
    database.query(sql, (error, results) =>{
        if(error){
            return error;
        }res.json(results);
     })
})


server.listen(3008, ()=>{
    console.log("Server  on")
})