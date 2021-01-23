const express = require("express");
const UserController = require("../user/user.controller");
const router = express.Router();
const auth = require("../../auth/auth.service");

//Create user
router.post("/user", UserController.createUser);

// Delete user by id
router.delete("/:userId", auth.isAuthenticated(), UserController.deleteUser);

// Get all users
router.get("/users", UserController.getUsers);

// Get user with all the task
router.get("/user/:id", UserController.getUserById);

// add task
router.post("/task", UserController.createTask);

module.exports = router;
