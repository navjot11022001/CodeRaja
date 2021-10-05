const dotenv = require("dotenv");
const express=require("express");
const app=express();
const port=process.env.PORT || 8900;
require("./db/conn");
const path=require("path");
const router=require("./route/Record")

dotenv.config({ path: './config.env' });
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"../public")));
app.use(router);


// const ejs=require("ejs");
 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../templates/views"));

// ejs.registerPartials(path.join(__dirname,"../templates/partials"));


app.get("/register",(req,res)=>{
    res.render("home")
})







app.listen(port,()=>{
    console.log(`listening to port number ${port}`);
})

