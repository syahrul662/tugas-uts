const express = require("express");
const bodyParser= require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req, res){

    weight= Number(req.body.weight);
    height = Number(req.body.height);
    hasil = (weight/(height/100*2));
    hasil = hasil.toPrecision(3);         
                 
    
     if (hasil < 17.0){ 
         res.send("<centre><h1>Body mask index" +  hasil + "<centre><h1>+kamu kurus!");
     }
    else if (hasil >= 17.0 && hasil < 24.0 ){ 
         res.send("<centre><h1>Body mask index =" + hasil + "<centre><h1>kamu ideal!");
     }
    else if (hasil >= 24.0 && hasil < 27.0){ 
         res.send("<centre><h1>Body mask index =" + hasil + "<centre><h1>kamu Gemuk!");     
    }
    else (hasil > 27.0)   
         res.send("<centre><h1>Body mask index =" + hasil + "<centre><h1>kamu obesitas!");
     
     });

app.listen(3000, function(){
    console.log("Server berjalan pada port 3000.");
});
