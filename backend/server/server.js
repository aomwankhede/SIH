const express = require("express");
const app = express()
const PORT = 3400;

app.use(express.json())
app.use("/api/auth", require("./Auth/routes"))

const connectDB = require("./db");
connectDB();

// const server = app.listen(PORT,()=>{
//     console.log(`Server connected to ${PORT}`)
// })


app.listen(PORT,()=>{
    console.log("Listening to server at port 3400")
})

//  process.on("unhandledRejection", err => {
//     console.log(`An error occurred: ${err.message}`)
//     server.close(() => process.exit(1))
//   })