// Set requirements (Express Router)
const router = require('express').Router();

// Set routes (user and thought routes)
const usersRoutes = require('./user-routes');

// Add `/users` to created routes 
router.use('/users', usersRoutes);


// Export Module Router
module.exports = router;