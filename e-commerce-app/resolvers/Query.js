exports.Query = {
  hello: () => {
    return 'World!';
  },
  products: (parent, { filter = {} }, { db }) => {
    let filterProducts = db.products;

    const { onSale, avgRating } = filter;
    if (typeof onSale === 'boolean') {
      filterProducts = filterProducts.filter((p) => p.onSale === onSale);
    }

    if ([1, 2, 3, 4, 5].includes(avgRating)) {
      filterProducts = filterProducts.filter((p) => {
        let numberOfReviews = 0;

        const sumRating = db.reviews
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
  product: (parent, args, { db }) => {
    const productId = args.id;
    return db.products.find((p) => p.id === productId);
  },
  categories: (_, __, { db }) => db.categories,
  category: (_, { id }, { db }) => db.categories.find((c) => c.id === id),
};
