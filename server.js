const express =require('express')
const app =express()
port =3000
const users =[
    {username:"charitha",age:25,email:"charitha@gmail.com"},
    {username:"chetan",age:25,email:"chetan@gmail.com"},
    {username:"eswar",age:25,email:"eswar@gmail.com"}
]
app.use(express.json())
app.get('/users',(req,res)=>{
    if(!req.query.user){
          return res.json({"message":"Usercannot be empty"})
    }
    const user =users.find(u=>u.username===req.query.user)
    if(user){
        return  res.json({"message":"User found","data":user})
    }
    else{
        return  res.json({"message":"User not found"})
     } 
})
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})