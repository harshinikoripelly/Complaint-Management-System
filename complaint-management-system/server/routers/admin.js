const express = require('express');
const { loginAdmin, fetchComplaints } = require('../controllers/adminController');
//express woutes setup
const adminrouter = express.Router();


//login user
adminrouter.post('/login',loginAdmin)


// fetch complaints
adminrouter.get('/complaint',fetchComplaints)


module.exports = adminrouter;