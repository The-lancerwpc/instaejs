const express = require("express");
const aap=express();
const port = 8080;

const path = require("path");
aap.set("views engine","ejs");
aap.set("views",path.join(__dirname,"views"));

//if we want to render a css file as a static file
//keep that inside public folder for bydefault acess

aap.use(express.static(path.join(__dirname,"public")));



//there are millions of ids on instagram we cant make millions of links for each accounts so created a common link
//with parameter username
// request to localhost /ig/cat or /ig/dog
aap.get("/ig/:username",(req,res)=>{

let{username} = req.params; //show username according to link


    const instadata = require("./data.json");//requiring data.json file
   // res.render("instagram.ejs",{instadata});//passing  all data to instagram.ejs file in the form of an object
  const data = instadata[username];

//we have cats and dogs in our json file ,if we are passing anything except this then
if(data){
   res.render("instagram.ejs",{data});//if found then render
}
else{
   res.render("errormsg.ejs");
}

  
  
});




 aap.listen(port,()=>{
    console.log(`listening on ${port}`);
 })