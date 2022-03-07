const { ApolloServer, gql } = require('apollo-server');
const { db } = require('./db');

// String, Int, Float, Boolean，ID!
const typeDefs = gql`
  type Query {
    hello: String
    count: Int
    price: Float
    isCool: Boolean
    products: [Product!]!
    product(id: ID!): Product
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
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
      return db.products.find(p => p.id === productId);
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
