const express = require("express");
const mongoose = require("mongoose");

const House = require("./models/house");

const bodyParser = require("body-parser");

const app = express();

mongoose.connect('mongodb://localhost:27017/houseBook',
   { useNewUrlParser: true }, (err, res) => {
      if (err) {
         console.log('Connection failed: ' + err);
      }
      else {
         console.log('Connected to database!');
      }
   }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

  app.post("/api/contacts", (req, res, next)=>{
    const contact = new House({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        imageUrl: req.body.imageUrl,
        group: req.body.group
        
    });
    post.save().then(createdContact => {
        res.status(201).json({
            message: "House added successful",
            contactId: createdContact._id
        })
    })
  
 
  });


app.get("/api/contacts", (req, res, next)=>{
   Contact.find().then(documents =>{
    res.status(200).json({
        message: 'Contacts working',
        contacts: documents
    });
   })
});

app.delete("/api/contacts/:id", (req, res, next)=>{
    House.deleteOne({_id:  reqparams.id}).then(result =>{
        console.log(result);
         res.status(200).json({
         message: 'Contacts deleted'
     });
    })
 });

//  document 
app.post("/api/documents", (req, res, next)=>{
    const document = new House({
        name: req.body.name,
        description: req.body.description,
        url: req.body.url,
        children: req.body.children
        
    });
    post.save().then(createdDocument => {
        res.status(201).json({
            message: "House added successful",
            documentId: createdDocument._id
        })
    })
  
 
  });

  app.get("/api/documents", (req, res, next)=>{
    Document.find().then(documents =>{
     res.status(200).json({
         message: 'Contacts working',
         documents: documents
     });
    })
 });

 app.delete("/api/documents/:id", (req, res, next)=>{
    Document.deleteOne({_id:  reqparams.id}).then(result =>{
        console.log(result);
         res.status(200).json({
         message: 'Documents deleted'
     });
    })
 });

//  message 
app.post("/api/messages", (req, res, next)=>{
    const message = new House({
        subject: req.body.subject,
        msgText: req.body.msgText,
        sender: req.body.sender
        
    });
    post.save().then(createdMessage => {
        res.status(201).json({
            message: "House added successful",
            messageId: createdMessage._id
        })
    })
  
 
  });

  app.get("/api/messages", (req, res, next)=>{
    Message.find().then(documents =>{
     res.status(200).json({
         message: 'Messages working',
         messages: documents
     });
    })
 }); 

 app.delete("/api/messages/:id", (req, res, next)=>{
    Message.deleteOne({_id:  reqparams.id}).then(result =>{
        console.log(result);
         res.status(200).json({
         message: 'Messages deleted'
     });
    })
 });



    module.exports = app;
