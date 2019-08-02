var express = require("express");
var app = express();
const driver = require(__dirname+'/driver.js');

app.use(express.static('public'));

//handle my home page
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.get("/instruction",function(req,res){
  var key = req.query.key;
  if(key!=undefined){
    console.log(key);
    driver.set(key).then((msg)=>{
      res.send(msg);
    }).catch((error)=>{
      res.send(error);
    });
  }else{
    console.log("400 bad request");
  }
});

//handle all the other page request
app.get('*',function(req,res){
  res.status(404);
  res.send('Not Found Error');
});

app.listen(5678,function(req,res){
  console.log("Ready at 5678");
});
