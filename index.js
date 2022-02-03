const express = require("express");
const app = express()

app.get("/test", (req, res)=> {
    res.send("Something is here...")
})
app.listen(9000, ()=> {
    console.log("Server is running...")
})

module.exports = app