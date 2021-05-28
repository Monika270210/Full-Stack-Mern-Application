import bcrypt from 'bcryptjs'
import User from '../models/usermodel.js';

export const signIn=async(req,res)=>{
     const {email,password}=req.body;

     const existingUser=await User.findOne({email:email});

     if(!existingUser)
     return res.status(400).json({message:"user does not exist !!!"});

     const checkpassword=await bcrypt.compare(password,existingUser.password);

     if(!checkpassword)
     return res.status(400).json({message:"please enter correct password !!!"});

     res.send(existingUser);

     
}


export const signUp=async(req,res)=>{
      const {firstname,lastname,email,password,confirmpassword}=req.body;
      
      try {
            const existingUser=await User.findOne({email:email});
            if(existingUser)
             return res.status(400).json({messgae:"user already exists !!!"});
            if(password!==confirmpassword)
           return res.status(400).json({message:"password's dont match !!!"});

            const hashedpassword=await bcrypt.hash(password,10);

            const newUser=await new User({name:`${firstname} ${lastname}`,email:email,password:hashedpassword});
             
            await newUser.save();

            res.send(newUser);
            
      } catch (error) {
            console.log(error);
      }
}


