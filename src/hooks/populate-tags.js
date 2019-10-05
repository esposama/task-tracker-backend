const logger = require('../logger');

module.exports = (options = {}) => async context => {
  const { app, result, params, method } = context;

  if (!result) return context;

  logger.info(JSON.stringify(context.result));

  const addTag = async task => {
    if (!task.tags) {
      return task;
    }

    const tagIds = task.tags;
    const tags = await app.service('tags').find({
      query: { _id: { $in: tagIds } }
    }, params);

    logger.info(JSON.stringify(tags));

    return {
      ...task,
      tags: tags.data,
    };
  };

  if (method === 'find') {
    context.result.data = await Promise.all(result.data.map(addTag));
  } else {
    context.result = await addTag(result);
  }

  return context;
};
