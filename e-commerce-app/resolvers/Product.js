exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((c) => c.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    console.log(id);
    return reviews.filter((r) => r.productId === id) || [];
  },
  // category: (parent, args, context) => {
  //   const { categories } = context;
  //   const categoryId = parent.categoryId;
  //   return categories.find((c) => c.id === categoryId);
  // },
};
