exports.Product = {
  category: ({ categoryId }, args, { categories }) => {
    return categories.find((c) => c.id === categoryId);
  },

  // category: (parent, args, context) => {
  //   const { categories } = context;
  //   const categoryId = parent.categoryId;
  //   return categories.find((c) => c.id === categoryId);
  // },
};
