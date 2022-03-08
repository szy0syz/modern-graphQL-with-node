exports.Category = {
  products: ({ id: categoryId }, args, { products }) => {
    return products.filter((p) => p.categoryId === categoryId);
  },
};
