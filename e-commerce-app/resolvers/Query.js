const { db } = require('../db');

exports.Query = {
  hello: () => {
    return 'World!';
  },
  count: () => {
    return 44;
  },
  price: () => {
    return 9.84;
  },
  isCool: () => {
    return true;
  },
  products: () => {
    return db.products;
  },
  product: (parent, args, context) => {
    const productId = args.id;
    return db.products.find((p) => p.id === productId);
  },
  categories: () => db.categories,
  category: (_, { id }) => db.categories.find((c) => c.id === id),
}