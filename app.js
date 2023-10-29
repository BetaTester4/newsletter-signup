const express = require("express")
const bodyParser=require('body-parser')
const validator = require('validator'); 

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
    const { fname, lname, email } = req.body;

    // Check if all fields are filled correctly and if email is valid
    if (fname && lname && validator.isEmail(email)) {
        // Redirect to success.html
        res.sendFile(__dirname + '/success.html');
    } else {
        // Redirect to failure.html
        res.sendFile(__dirname + '/failure.html');
    }
})

