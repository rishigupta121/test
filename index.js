const express = require('express');
const bodyParser = require('body-parser');
const movies  = require('./movies.json');

const app = express();

const users = [
    {
        "firstName":"Rishi",
        "lastName":"Gupta",
        "email":"rishigupta41993@gmail.com",
        "contactNo":"1234567"
    },
    {
        "firstName":"Rishi1",
        "lastName":"Gupta1",
        "email":"rishigupta41993@gmail.com1",
        "contactNo":"12345671"
    },
    {
        "firstName":"Rishi1",
        "lastName":"Gupta1",
        "email":"rishigupta41993@gmail.com1",
        "contactNo":"12345671"
    },
    {
        "firstName":"Rishi1",
        "lastName":"Gupta1",
        "email":"rishigupta41993@gmail.com1",
        "contactNo":"12345671"
    }
];

app.use(bodyParser.json());


app.get('/users',(req,res)=>{
    res.json(users);
});

app.get('/movies',(req,res)=>{
    res.json(movies);
});


app.post('/users',(req,res)=>{
    // field checks
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
    if(!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.contactNo ){
        res.status(400);
        res.json({"msg":"Please Fill required field",code:400});
    }else if(!emailRegex.test(req.body.email)){
            res.status(400);
            res.json({"msg":"Email not valid","code":400});
    }
    else{
        res.status(200);
        if(users.push(req.body)){
            res.json({"msg":"user saved","code":200});
        }
    }
});

app.put('/users/:id',(req,res)=>{
       // field checks
       //console.log(users[1]);
       let id= req.params.id-1;
      // console.log(id);
       if(id<0){
           res.status(400);
           res.json({msg:"id is invalid"});
       }
       else if(users[id] == undefined){
           res.status(400);
           res.json({msg:"Already deleted or user not exists"});
       }else{
            for (const [key, value] of Object.entries(req.body)) {
                users[id][key]=value;
            }
           res.json(users)
       }
});
app.delete('/users/:id',(req,res)=>{
    // field checks
    let id= req.params.id-1;
    if(!id){
        res.status(400);
        res.json({msg:"id is invalid"});
    }
    else if(users[id] == undefined){
        res.status(200);
        res.json({msg:"Already deleted or user not exists"});
    }else{
        
        users.splice(id,1);
        res.status(200);
        res.json(users)
    }

});


app.listen(4000);