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
  products: (parent, { filter }, { products }) => {
    const filterProducts = products;
    
    if (typeof filter?.onSale === 'boolean') {
      return filterProducts.filter((p) => p.onSale === filter?.onSale);
    }

    return filterProducts;
  },
  product: (parent, args, { products }) => {
    const productId = args.id;
    return products.find((p) => p.id === productId);
  },
  categories: (_, __, { categories }) => categories,
  category: (_, { id }, { categories }) => categories.find((c) => c.id === id),
};
