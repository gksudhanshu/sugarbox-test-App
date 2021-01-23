const User = require("./user.model");
const Task = require("../task/task.model");
const jwt = require("jsonwebtoken");
const config = require("../../config/environment");

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    return res.status(statusCode).send(err);
  };
}

async function getUsers(req, res) {
  let currentPage = req.query.page ? req.query.page : 1;
  const users = await User.paginate(
    {},
    { page: currentPage, limit: req.query.limit || 10 }
  );
  res.send(users);
}

async function createUser(req, res) {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });
  await user.save();
  var token = jwt.sign({ _id: user._id }, config.secrets.session, {
    expiresIn: 60 * 60 * 5
  });
  res.json({ token });
}
//createTask
async function createTask(req, res) {
  const task = new Task({
    task: req.body.task,
    assinee: req.body.assinee
  });
  await task.save();
  res.send(task);
}

async function deleteUser(req, res) {
  return User.findByIdAndRemove(req.params.userId)
    .exec()
    .then(function () {
      res.status(204).end();
    })
    .catch(handleError(res));
}

async function getUserById(req, res) {
  const userId = req.params.id;
  return User.findById(userId)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(404).end();
      }
      Task.find({ assinee: user.email }).then((task) => {
        let result = { ...user._doc };
        result.Tasks = task;
        res.json(result);
      });
    })
    .catch((err) => next(err));
}

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  deleteUser: deleteUser,
  getUserById: getUserById,
  createTask: createTask
};
