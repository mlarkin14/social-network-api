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
        match: [/.+@.+\..+/, 'Please enter a valid email address.']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }]
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});

// get total count of friends
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
// create the Users model using the Users Schema
const Users = model("Users", UsersSchema);

// Export Users module
module.exports = Users;