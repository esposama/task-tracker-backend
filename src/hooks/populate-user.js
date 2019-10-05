const logger = require('../logger');

module.exports = (options = {}) => async context => {
  const { params, data } = context;

  if (!data || !params) return context;
  if (!params.user) return context;

  context.data = {
    ...context.data,
    user: context.params.user._id,
  };

  return context;
};
