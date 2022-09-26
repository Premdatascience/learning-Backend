
import User from "../models/AuthUserModule.js";


import bcrypt from "bcryptjs";
import  Jwt  from "jsonwebtoken";




export const Register = async (req, res) => {
  


try { 
  var emailExist =  await User.findOne({email:req.body.email});
  if(emailExist){
   return res.status(400).json("email already exist")
  }
  var hash =await bcrypt.hash(req.body.password,10);

  const user = new User({
    name:req.body.name,
    email:req.body.email,
    password:hash,
  });
  var data =await user.save();  

res.json(data);



} catch (err) {
  res.status(400).json(err);
  
  
}




// console.log(data); 



};

export const Login= async (req, res) => {

  try {
    var userData =  await User.findOne({email:req.body.email});
    if(!userData){
     return res.status(400).json("email not exist")
    }

    var validpassword = await bcrypt.compare(req.body.password ,userData.password)
 if(!validpassword){
  return res.status(400).json("password not vaild")

 }
 var userToken = await Jwt.sign({email:userData.email},'secretORprivateKEY')

 res.header('auth',userToken).send(userToken);

  } catch (err) {
  res.status(400).json(err);
    
  }

  // console.log(userToken);
}

  const vailduser = (req,res,next)=>{
  var token = req.header('auth');
  req.token= token;
  next();
}


export const ViewRegister= (vailduser,async (req, res)=>{
Jwt.verify(res.token,'secretORprivateKEY',async(err,data)=>{
  if(err){
res.status(400).json(err);
  }
  else{
    const data = await User.find().select(['-password']);
    res.json(data)
  }
});
  const data =await User.find();
res.json(data)
});


