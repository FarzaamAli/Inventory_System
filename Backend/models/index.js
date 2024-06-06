const mongoose = require("mongoose");
const uri = "mongodb+srv://farzaam:farzaam004@cluster0.iwu6udc.mongodb.net/inventory_system";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };