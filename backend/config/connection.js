const mongoose = require('mongoose');

function connection(){
    mongoose.connect("mongodb://localhost/fseletro", 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("mondodb conectou com sucesso")
    })
    
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=connection()