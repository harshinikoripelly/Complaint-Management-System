require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const userRoutes = require('./routers/user');
const adminRoutes = require('./routers/admin');
const { Admin } = require('./models/userModel')


//middleware
app.use(express.json())

app.use(cors())

app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})


//routes from route/user
app.use('/api/user',userRoutes)


//routes from route/admin
app.use('/api/admin',adminRoutes)




// connect to db


app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
})


