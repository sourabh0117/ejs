//tmeplate ek layout hote hv(blueprint h) mltb copy use hoti 
//ejs embedded javascript template

const express =require("express");
const app = express();
const path = require("path");
//const { use } = require("react");

const port = 8080;
app.set("views",  path.join(__dirname, "/views"));


//view engine expect krtaa h ki hamare jitne bhi template holder m rhe view by default express views folder ko dhundhega
app.set("view engine", "ejs");//ejs require nhi kiy kuki express directly ejs ko require kr leta //view engine  = template engine
//vo package jo hamare templates ko create krta h wo h ejs

app.get("/", (req, res)=>{
    res.render("home.ejs");//mtlb webpage pr ab ye wo code run krega jo home.ejs m h
});

//instagram
app.get("/ig/:username",  (req, res) =>{
    // let { username } = req.params;
    // const follower = ["adam",  "bob", "Steve", "abc"]; 

    
    //res.render("instagram.ejs", {username, follower});
    //res.render("instagram.ejs");

    let { username } = req.params;
    const instadata = require("./data.json");//database se date
    const data = instadata[username];
    if(data){
        console.log(data);
        res.render("instagram.ejs", {data});
    }
    else{
        res.render("error.ejs")
    }
    
});



//ejs se hum response send nhikrte render krte h
app.get("/hello", (req, res)=>{//backend se run krne pr ye run krega pr home vala nhi
    console.log("hello");
});




app.get("/dice", (req, res) =>{
    let num =Math.floor(Math.random()*6) + 1;
    res.render("dice.ejs", {diceVal: num});
});


app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});