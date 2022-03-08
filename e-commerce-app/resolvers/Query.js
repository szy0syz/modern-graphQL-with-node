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
  products: (parent, { filter = {} }, { reviews, products }) => {
    let filterProducts = products;

    const { onSale, avgRating } = filter;
    if (typeof onSale === 'boolean') {
      filterProducts = filterProducts.filter((p) => p.onSale === onSale);
    }

    if ([1, 2, 3, 4, 5].includes(avgRating)) {
      filterProducts = filterProducts.filter((p) => {
        let numberOfReviews = 0;

        const sumRating = reviews
          .filter((r) => r.productId === p.id)
          .reduce((sum, cur) => {
            numberOfReviews++;
            return (sum += cur.rating);
          }, 0);

        const avgProductRating = sumRating / numberOfReviews;
        return avgProductRating >= avgRating;
      });
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
