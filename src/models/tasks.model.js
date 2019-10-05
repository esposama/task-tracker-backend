// tasks-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const tasks = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: false },
    tags: [{ type: Schema.Types.ObjectId, ref: 'tags', required: false }],
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('tasks');
  } catch (e) {
    return mongooseClient.model('tasks', tasks);
  }
};
