// Require Users Model
const { Users } = require('../models');

// Set up Users Controller
const usersController = {

    // Create a new User
    createUsers({ body }, res) {
        Users.create(body)
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => res.status(400).json(err));
    },

    // Get All Users
    getAllUsers(req, res) {
        Users.find({})
            .select('-__v')
            // .sort({_id: -1})
            .then(dbUsersData => res.json(dbUsersData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Get single user by ID
    getUsersById({ params }, res) {
        Users.findOne({ _id: params.id })
            .select('-__v')
            // return if no user is found 
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User with this particular ID!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Update a current User by ID
    updateUsers({ params, body }, res) {
        Users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User with this particular ID!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.json(err));
    },

    deleteUsers({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })
            .then(dbUsersData => {
                if (!dbUsersData) {
                    res.status(404).json({ message: 'No User with this particular ID!' });
                    return;
                }
                res.json(dbUsersData);
            })
            .catch(err => res.status(400).json(err));
    },

};

// Export module users controller
module.exports = usersController;