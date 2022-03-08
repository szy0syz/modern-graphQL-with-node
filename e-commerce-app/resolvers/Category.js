exports.Category = {
  products: ({ id: categoryId }, { filter }, { products }) => {
    const filterProducts = products.filter((p) => p.categoryId === categoryId);

    if (typeof filter?.onSale === 'boolean') {
      return filterProducts.filter((p) => p.onSale === filter?.onSale);
    }

    return filterProducts;
  },
};
