const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username:{
        type:String,
        required: true,
        min:3,
        max:20,
        unique:true,
    },

    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },

    password:{
        type:String,
        required:true,
        min:4,
    },

    profilePicture:{
        type:String,
        default:"",
    },

    coverPicture:{
        type:String,
        default:"",
    },

    followers:{
        type:Array,
        default:[],
    },

    followings:{
        type:Array,
        default:[],
    },

    isAdmin:{
        type:Boolean,
        default:false,
    },

    description:{
        type:String,
        max:50
    },

    city:{
        type:String,
        max:50
    },
    from:{ //hometown
        type:String,
        max:50
    },

    relationship:{
        type:Number,
        enum:[1, 2, 3]
    }
//mozemo kasnije da dodamo kao info model za informacije o korisniku
},
{timestamps:true}

)

module.exports = mongoose.model("User", UserSchema)