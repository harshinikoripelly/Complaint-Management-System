const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const { User, Complaint } = require('../models/userModel');

const createToken= (_id) =>{
    return jwt.sign({_id},'abc123',{expiresIn:'3d'});
}

//singnup user
const signupUser = async (req, res) => {

    const {idno,name,phoneno,roomno,year,password} = req.body;


    try {
        const user = await User.signup(idno,name,phoneno,roomno,year,password);

        //creating jwt token
        const token = createToken(user._id);

        res.status(200).json({idno,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


//login user
const loginUser = async (req, res) => {
    const {idno,password} = req.body;
    console.log("loginuser",idno,password);

    try {
        const user = await User.login(idno,password);
        const name = user.name;
        console.log("name",name);
        //creating jwt token
        const token = createToken(user._id);
        res.status(200).json({name,idno,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



//register Complaint
const registerComplaint = async (req, res) => {

    const {idno,category,name,description,image,date,status} = req.body;
    console.log("controller",idno,category,name,description,image,date,status);


    try {
        const user = await Complaint.register(idno,category,name,description,image,date,status);


        res.status(200)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}



//fetch complaints based on id
const fetchComplaint = async (req, res) => {
    const idnumber = req.headers.idno;
    try {

        const allComplaints = await Complaint.find({idno : idnumber});

        res.send({status:"ok",data:allComplaints})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

//fetch complaints
const fetchComplaints = async (req, res) => {
    // const idnumber = req.headers.idno;
    try {

        const allComplaints = await Complaint.find({});

        res.send({status:"ok",data:allComplaints})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

//fetch user data
const fetchUserdata = async (req, res) => {
    const idnumber = req.headers.idno;
    try {

        const userData = await User.findOne({idno : idnumber});

        res.send({status:"ok",data:userData})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

// change status
const changeStatus = async (req, res) => {

    const {_id,idno,category,name,description,image,date,status} = req.body;
    console.log("controller",_id,idno,category,name,description,image,date,status);


    try {
        const complaint = await Complaint.findById(_id);

        if(!complaint) return res.status(400).send("Complaint not found")

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            _id,
            {idno,category,name,description,image,date,status},
            {new: true}
        );

        console.log("updated",updatedComplaint);


        res.status(200)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

//change info
const changeInfo = async (req, res) => {

    const {_id,idno,name,phoneno,roomno,year,password} = req.body;
    console.log("controller",_id,idno,name,phoneno,roomno,year,password);


    try {
        const user = await User.findById(_id);

        if(!user) return res.status(400).send("User not found")

        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {idno,name,phoneno,roomno,year,password},
            {new: true}
        );

        console.log("updated",updatedUser);


        res.status(200)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


module.exports = {signupUser,loginUser,registerComplaint,fetchComplaint,fetchUserdata,changeStatus,changeInfo,fetchComplaints}