const express = require("express")
const bodyParser=require('body-parser')

const app=express()
app.listen('3000',()=>{
    console.log('listening from port 3000')

})

// app.get('/',(req,res)=>{
//    res.write('<h1>hello</h1>')
//   res.send()
// })

app.use(bodyParser.urlencoded({extended:true}))



app.use(express.static('public'));
app.get('/',(req,res)=>{
   // res.write('<h1>hello</h1>')
    res.sendFile(__dirname+'/signup.html')
})

app.post('/',(req,res)=>{
    // let firstName=req.body.fname;
    // let lastName=req.body.lname;
    // let email=req.body.email;
 console.log(req.body)
    // console.log(firstName,lastName,email)
})

