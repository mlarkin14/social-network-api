// Require Mongoose
const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // use REGEX to validate correct email
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        //match: [/.+@.+\..+/, 'Please use a valid email address']
    },
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

// create the Users model using the Users Schema
const Users = model("Users", UsersSchema);

// Export Users module
module.exports = Users;