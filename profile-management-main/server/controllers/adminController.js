const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const { Admin } = require('../models/userModel');

const createToken= (_id) =>{
    return jwt.sign({_id},'abc123',{expiresIn:'3d'});
}


//login admin
const loginAdmin = async (req, res) => {
    console.log("entered controller")

    const adminName = req.body.name;
    const adminPassword = req.body.password;

    try {
        console.log("try block")
        const admin = await Admin.adminlogin(adminName,adminPassword);
        console.log("login")
        const name = admin.name;
        console.log("name",name)
        //creating jwt token
        const token = createToken(admin._id);
        res.status(200).json({name,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//fetch complaints
const fetchComplaints = async (req, res) => {
    console.log("entered controller")
    try {

        const allComplaints = await Complaint.find({});

        res.send({status:"ok",data:allComplaints})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}



module.exports = {loginAdmin, fetchComplaints}