var exp = require('express');

var app = exp();

app.listen(8080,function(){
	console.log("server started on 8080");
});

app.get('/emp',function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.all('*',function(req,res){
    res.send("Wrong URL ");
});