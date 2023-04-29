const express=require('express')
const bodyParser=require("body-parser")
const app=express()

app.use(bodyParser.urlencoded({extended:true}))

app.get("/cal",function(req,res){
    res.sendFile(__dirname + "/calculator.html")
})

app.post("/cal",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1+n2;

    res.send("The result of calculation is "+result)
})

app.get("/bmical",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmical",function(req,res){
    var height=parseFloat(req.body.ht);
    var weight=parseFloat(req.body.wt);
    
    var bmi=(weight)/(height*height);

    res.send("Your BMI is "+bmi);
})

app.listen(3000,function(){
    console.log("Server started at 3000")
})




