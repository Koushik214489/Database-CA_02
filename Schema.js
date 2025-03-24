const mongoose = require ('mongoose');

const movie = new mongoose.Schema({
    title:{
        type:String,      
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    releaseYear:{
        type:Number,
        required:true
    },
    availableCopies:{
        type:Number,
        require:true
    },
})


module.exports = mongoose.model("Task",movie)







