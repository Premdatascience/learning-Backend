import Users from "../models/RegistrationloginModule.js";



export const createRegister=(req,res)=>{
    console.log(req.body) 
    const {name,email,password} =req.body;
    Users.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new Users({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })


}


export const createLogin=(req,res)=>{
    const {email,password} =req.body;
    Users.findone({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
}


export const viewRegistration = async (req, res) => {
    try {
      const usersdata = await Users.find();
      res.status(200).json(usersdata);
    } catch (err) {
      res.status(500).json(err);
    }
  };
  




