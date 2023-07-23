const express = require('express');
//express woutes setup
const router = express.Router();
//importing controller
const {signupUser,loginUser,registerComplaint, fetchComplaint, fetchUserdata, changeStatus, changeInfo, fetchComplaints} = require('./../controllers/userController')

//signup user
router.post('/signup',signupUser)

//login user
router.post('/login',loginUser)

//fetching user data
router.get('/info',fetchUserdata)

//editing user info
router.put('/info',changeInfo)

//register complaint
router.post('/complaint',registerComplaint)

//fetch complaints based on id
router.get('/complaint',fetchComplaint)

//fetch all complaints
router.get('/complaints',fetchComplaints)

//change status
router.put('/history',changeStatus)

module.exports = router;