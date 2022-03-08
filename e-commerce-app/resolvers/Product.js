const { db } = require('../db');

exports.Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;
    return db.categories.find((c) => c.id === categoryId);
  },
};
