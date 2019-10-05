const { authenticate } = require('@feathersjs/authentication').hooks;

const populateUser = require('../../hooks/populate-user');
const populateTags = require('../../hooks/populate-tags');

module.exports = {
  before: {
    all: [ authenticate('jwt'), populateUser() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ populateTags() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
