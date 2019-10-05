const users = require('./users/users.service.js');
const tags = require('./tags/tags.service.js');
const tasks = require('./tasks/tasks.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(tags);
  app.configure(tasks);
};