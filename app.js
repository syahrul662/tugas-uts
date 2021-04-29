const express = require("express");
const bodyParser= require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req, res){

     var weight= Number(req.body.weight);
    var height = Number(req.body.height);
    var hasil = (weight/(height/100*2));
             
                 
    
     if (hasil < 17.0){ 
         res.send("<centre><h1>Body mask index" +  hasil + "<centre><h1>+kamu kurus!");
     }
    else if (hasil >= 17.0 && hasil < 24.0 ){ 
         res.send("<centre><h1>Body mask index =" + hasil + "<centre><h1>kamu ideal!");
     }
    else if (hasil >= 24.0){ 
         res.send("<centre><h1>Body mask index =" + hasil + "<centre><h1>kamu Gemuk!");     
    }
    else (hasil > 27.0)   
         res.send("<centre><h1>Body mask index =" + hasil + "<centre><h1>kamu obesitas!");
     
     });

app.listen(3000, function(){
    console.log("Server berjalan pada port 3000.");
});