const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema
const validator = require("validator");

const db1 = mongoose.createConnection("mongodb+srv://harshinireddy:Harshi1914@cluster0.x2ctpaq.mongodb.net/UserDatabase?retryWrites=true&w=majority");

const db2 = mongoose.createConnection("mongodb+srv://harshinireddy:Harshi1914@cluster0.x2ctpaq.mongodb.net/ComplaintDatabase?retryWrites=true&w=majority");

const db3 = mongoose.createConnection("mongodb+srv://harshinireddy:Harshi1914@cluster0.x2ctpaq.mongodb.net/AdminDatabase?retryWrites=true&w=majority");


const userSchema = new Schema({
    idno:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true
    },
    roomno: {
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


//static signup method
userSchema.statics.signup = async function(idno,name,phoneno,roomno,year,password) {
    console.log(idno,name,phoneno,roomno,year,password);


    //validation
    if(!name || !idno || !phoneno || !roomno || !year || !password){
        throw Error('all fields must be fields')
    }
    // if(!validator.isEmail(email)){
    //     throw Error('email is not valid')
    // }
    if(!validator.isStrongPassword(password)){
        throw Error('not a strong password')
    }

    const exists = await this.findOne({idno});
    if(exists){
        throw Error('id already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({idno,name,phoneno,roomno,year,password:hash})

    return user;

}

//static login method

userSchema.statics.login = async function(idno,password){
    //validation
    if(!idno || !password){
        throw Error('All fields must be fields')
    }
    // if(!validator.isEmail(email)){
    //     throw Error('Email is not valid')
    // }

    const user = await this.findOne({idno});
    if(!user){
        throw Error('invalid id ');
    }

    const match = await bcrypt.compare(password,user.password)

    if(!match){
        throw Error('invalid password');
    }

    return user;

}

const complaintSchema = new Schema({
    idno: {
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:
    {
        data: Buffer,
        contentType: String
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

//static register method
complaintSchema.statics.register = async function(idno,category,name,description,image,date,status) {

    console.log(idno,category,name,description,image,date,status);

    //validation
    if(!idno || !category || !name ){
        throw Error('category and name must be filled')
    }


    console.log("reached2");
    const complaint = await this.create({idno,category,name,description,image,date,status})

    console.log(complaint)

    return complaint;

}


//Admin Schema
const adminSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

adminSchema.statics.adminlogin = async function(name,password){
    console.log("entered schema")
    console.log(name,password)
    //validation
    if(!name || !password){
        throw Error('All fields must be fields')
    }
    // if(!validator.isEmail(email)){
    //     throw Error('Email is not valid')
    // }

    const admin = await this.findOne({name});
    if(!name){
        throw Error('invalid name ');
    }

    // const match = await bcrypt.compare(password,admin.password)

    if(password !== admin.password){
        throw Error('invalid password');
    }

    return admin;

}



// adminSchema.static('adminlogin', 
// function (name,pass) {
//     console.log("entered schema")
//     console.log(name,password)
//     // return this.find({ address: address });
// })
  


const User = db1.model('User',userSchema);
const Complaint = db2.model('Complaint',complaintSchema);
const Admin = db3.model('Admin',adminSchema)


module.exports =  {User, Complaint,Admin}