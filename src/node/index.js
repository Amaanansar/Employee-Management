const express = require('express');
const app  = express();
const mongoose = require('mongoose');
let url = "mongodb+srv://companyUser:amaanAnsari@cluster0.ivkgh.mongodb.net/employee?retryWrites=true&w=majority"
const employee = require('./logindatas.js')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// CORS
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type,Accept");
    
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    next();
    
});
// CORS

mongoose.connect(url , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("here")
    }
)
app.listen(3001,
    ()=>{console.log("Server is ruuning on 3001")}
)

app.get("/employee" , (req,res) => {
    employee.find().then(
        (data) => {console.log(res.json(data))})
})
const edata = require('./Models/edata.js')
app.get("/edata" , (req,res) => {
    edata.find().then(
        (data) => {console.log(res.json(data))})
})

app.post("/addNeweData",jsonparser,(req,res)=>{
    const student = new edata({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.Name1,
        age:req.body.Age1,
        jd:req.body.jd,
        id:req.body.id,
    })
    console.log(student)

    student.save().then((result)=>{console.log(result)})
    .catch((err)=>{console.log(err)})
})

app.put('/edata/:id',jsonparser,(req,res)=>{
    edata.updateOne({_id:req.params.id},
        {$set:{
            name:req.body.Name1,
            age:req.body.Age1,
            jd:req.body.jd,
            id:req.body.id,
            
        }}).then(
            (result)=>{res.json(result)}
        ).catch(
            (err)=>{console.log(err)}
        )
})

// app.delete('/employeeinfo2/:id',(req,res)=>{
//     employee.deleteOne({_id:req.params.id}).then(
//         (result)=>{
//             console.log(res.status(200).json(result))
//             res.status(200).json(result)
//         }
//     ).catch(
//         (err)=>{console.log(err)}
//     )
// })



app.delete('/edata/:id',(req,res)=>{
    edata.deleteOne({_id:req.params.id}).then(
        (result)=>{res.status(200).json(result)
        // console.log("jeteeejdkfbajbfafkfbakabksb", res.status(200).json(result))
        }
    ).catch(
        // (err)=>{console.log(err)}
    )
})


// mongoose.connect(url,
//     {
//         useNewUrlParser:true,
//         useUnifiedTopology:true
//     }).then(
//         ()=>{console.log('database atlas connected')}
//     )

// personaldata.find({},
//     (err,data)=>{
//         if(err){ console.log(err)}
//         // else{console.log(data)}
//     })

// app.get('/studentinfo',
// (req,res)=>{
//     personaldata.find().then(
//         (data)=>{res.status(200).json(data)}
//     )
// }
// )

// app.delete('/studentinfo/:id',(req,res)=>{
//     personaldata.deleteOne({_id:req.params.id}).then(
//         (result)=>{res.status(200).json(result)}
//     ).catch(
//         (err)=>{console.log(err)}
//     )
// })

// app.post("/addstud",jsonparser,(req,res)=>{
  
//     console.log(student)

//     student.save().then((result)=>{console.log(result)})
//     .catch((err)=>{console.log(err)})
// })

// app.put('/studentinfo1/:id',jsonparser,(req,res)=>{
//     personaldata.updateOne({_id:req.params.id},
//         {$set:{
//             Name:req.body.name1,
//             Age:req.body.age1,
//             Contact:req.body.contact1,
//             Location:req.body.location1,
            
//         }}).then(
//             (result)=>{res.json(result)}
//         ).catch(
//             (err)=>{console.log(err)}
//         )
// })



// // Practice work

// employeedata.find({},
//     (err,data)=>{
//         if(err){ console.log(err)}
//         else{console.log(data)}
//     })

// app.get('/employeeinfo1',
// (req,res)=>{
//     employeedata.find().then(
//         (data)=>{res.status(200).json(data)}
//     )

// })

// app.delete('/employeeinfo2/:id',(req,res)=>{
//     employeedata.deleteOne({_id:req.params.id}).then(
//         (result)=>{res.status(200).json(result)}
//     ).catch(
//         (err)=>{console.log(err)}
//     )
// })

// app.post("/addemployee",jsonparser,(req,res)=>{
//     const employee = new employeedata({
//         _id:new mongoose.Types.ObjectId(),
//         name:req.body.Name1,
//         age:req.body.Age1,
//         dob:req.body.Dob1,
//         email:req.body.Email1,
//         contact:req.body.Contact1,
//         location:req.body.Location1,
//     })
//     console.log(employee)

//     employee.save().then((result)=>{console.log(result)})
//     .catch((err)=>{console.log(err)})
// })


// app.put('/employeeinfo1/:id',jsonparser,(req,res)=>{
//     employeedata.updateOne({_id:req.params.id},
//         {$set:{
//             name:req.body.Name1,
//             age:req.body.Age1,
//             dob:req.body.Dob1,
//             email:req.body.Email1,
//             contact:req.body.Contact1,
//             location:req.body.Location1,
            
//         }}).then(
//             (result)=>{res.json(result)}
//         ).catch(
//             (err)=>{console.log(err)}
//         )
// })



// app.listen(3000,
//     ()=>{console.log("Server is ruuning on 3000")}
// )