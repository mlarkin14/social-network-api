// Require express router
const router = require('express').Router();

// Set requirements (from users-controller)
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers
} = require('../../controllers/users-controller');

// -- Directs to: /api/users <GET, POST>
router.route('/').get(getAllUsers).post(createUsers);

// -- Directs to: /api/users/:id <GET, PUT, DELETE>
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// Module export router
module.exports = router;