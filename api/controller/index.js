 var studentModel=require('../model/index')
 var acccountModel=require('../model/account')
 var bcrypt=require('bcrypt')
 var jwt= require('jsonwebtoken')
 const getStudent= async(req,res)=>{
    try { 
        const listStudent= await studentModel.find({})
        res.send({
            listStudent,
            message:'success'
        })
        
    } catch (error) {
        res.send({

            message:'error'
        })
        
    }
 }
 const addStudent= async(req,res)=>{
    try { 
        const body=req.body
        const listStudent= await studentModel.create({
            name:body.name,
            age:body.age
        })
        res.send({
            listStudent,
            message:'success'
        })
        
    } catch (error) {
        res.send({

            message:'error'
        })
        
    }
 }



 const deleteStudent= async(req,res)=>{
    try { 
        const id=req.params.id
        const listStudent= await studentModel.findByIdAndDelete(id)
           
        res.send({
            listStudent,
            message:'success'
        })
        
    } catch (error) {
        res.send({

            message:'error'
        })
        
    }
 }
 const updateStudent= async(req,res)=>{
    try { 
        const body=req.body
        const id=req.params.id
        const listStudent= await studentModel.findByIdAndUpdate(id,{ name:body.name,
            age:body.age})
           
        res.send({
            listStudent,
            message:'success'
        })
        
    } catch (error) {
        res.send({

            message:'error'
        })
        
    }
 }


 const searchStudent= async(req,res)=>{
    try { 
        const textSearch=req.query.textSearch  
        const listStudent= await studentModel.find({name:{
            $regex:textSearch,
            $options:'i'
         }})
           
        res.send({
            listStudent,
            message:'success',
            
        })
        
    } catch (error) {
        res.send({

            message:'error'
        })
        
    }
 }
 const signUp= async(req,res)=>{
    try { 
        const username=req.body.username
        const passwordSignup=req.body.password
        console.log(username,'u');
        const check= await acccountModel.findOne({username})
        if(check){
            res.send({message:'tai khoan da ton tai'})
        }
        else{
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(passwordSignup, salt)
            const data = await acccountModel.create({ username: username, password: password })
            console.log(data,'dataaa');
            res.send({
                data,
                message: 'success'
            })

        }
        
        
    } catch (error) {
        res.send({
            message:'error'
        })
        
    }
 }
 const login= async(req,res)=>{
    try { 
        const ACCESS_TOKEN_SECRET='ACCESS_TOKEN_SECRET'
        const username=req.body.username
        const passwordLogin=req.body.password
        console.log(username,passwordLogin);
        const check= await acccountModel.findOne({username})
        const tokenData = await acccountModel.findOne({ username }).select(["-password"])
        if(check){
             const checkPassword=await bcrypt.compare(passwordLogin,check.password)
             if(checkPassword===true){
                const token= jwt.sign({tokenData},ACCESS_TOKEN_SECRET,{expiresIn:'5d'})
                
                res.send({
                    message:'loginSuccess',
                    token,
                    role:check.role
                    
                })
             }
             else{
                res.send({message:'failure'})
             }
        }
        else{
           
            res.send({
            
                message: 'failure'
            })

        }
        
        
    } catch (error) {
        res.send({
            message:'failure'
        })
        
    }
 }
 module.exports={
    getStudent,
    addStudent,
    deleteStudent,
    updateStudent,
    searchStudent,
    signUp,login
 }