const { db } = require('../db');

exports.Category = {
  products: (parent, args, context) => {
    const categoryId = parent.id;
    return db.products.filter((p) => p.categoryId === categoryId);
  },
};
