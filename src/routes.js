const UserController = require("./controllers/UserController");

module.exports = [
  // lista os users, pode ser usado query params para sort asc ou desc
  {
    endpoint: "/users",
    method: "GET",
    handler: UserController.listUsers,
  },
  // filtra user por id
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: UserController.getUserById,
  },
  {
    endpoint: "/users",
    method: "POST",
    handler: UserController.createUser,
  },
  {
    endpoint: "/users/:id",
    method: "PUT",
    handler: UserController.updateUser,
  },
  {
    endpoint: "/users/:id",
    method: "DELETE",
    handler: UserController.deleteUser,
  },
];
