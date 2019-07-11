const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        // required: true
    },
    password: {
        type: String,
        trim: true,
        // required: true
    },
    permission: {
        type: [String],
        enum: ['user','admin'],
        default: ['user']
    },
    created: {
        type: Date, 
        default: Date.now 
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
