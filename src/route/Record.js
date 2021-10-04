const express=require("express");
// const { route } = require("../../../Ecommerse/routes/productRoutes");
const router=express.Router();
const User=require("../model/User"); 
const nodemailer=require("nodemailer");




router.get("/register",(req,res)=>{
    res.render("home")
})


router.get("/",(req,res)=>{
res.render("home");
})


router.get("/home",(req,res)=>{
    res.render("home");
    })
router.post("/register",async (req,res)=>{
    try{
const {name,email,phone,intime}=req.body;
const employee=new User({
    name,email,phone,intime
});
const employees=await employee.save();
let transporter = nodemailer.createTransport({
    // host: "mail.codeRaja.com",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service:"gmail",
    auth: {
      user:'cunavjot@gmail.com', // generated ethereal user
      pass:'Navjot@1102', // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"CodeRaja 👻" <navjot1561@gmail.com>',
    to: email, 
    subject: "CodeRaja confirmation timings",
    text: `Hello welcome ${name} to CodeRaja 👻 you entered at ${intime}`, 
    html: `<b>Hello welcome ${name} to CodeRaja 👻 you entered at ${intime} </b>`, 
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

console.log(employees);


    res.render('in',{employees});
}
catch(e){
    
    console.log(e+"kuch to gadbad h");
}
}) 



router.get("/records/:id",async (req,res)=>{
    try{
        console.log("request agyi")
const _id=req.params.id;
    const employee = await User.findById(_id);
    
    const employees=await User.find({});
    console.log(employees.name+"bharat mata ki ");
res.render('records',{employee,employees});
}
catch(e){console.log(e+"error agya")}
})


router.get("/records",async (req,res)=>{
    const employees=await User.find({});
    res.render('records',{employees});
})


router.get("/in",async (req,res)=>{
    // const employees=await User.find({});
    res.render('in');
})

router.post("/out/:id",async (req,res)=>{
    try{
        const _id  = req.params.id;
        // let date=new Date();
        let date=new Date();
    let a=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    
        const employees=await User.findByIdAndUpdate({_id},{"outtime":a});
        console.log(employees)
        
            res.render('out',{employees});

    }
    catch(e){
        console.log("error in sending "+e)
    }
})





router.get("/in/:id",async (req,res)=>{
    // const employees=await User.find({});
    try{
        console.log("request agyi")
const _id=req.params.id;
    const employees = await User.findById(_id);
console.log(employees.name+"bharat mata ki ");
res.render('in',{employees});
}
catch(e){console.log("error agya")}
}) 

module.exports=router;