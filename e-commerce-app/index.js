const { ApolloServer } = require('apollo-server');
const { db } = require('./db');
const { typeDefs } = require('./schema');
const { Query, Product, Category } = require('./resolvers');

const resolvers = {
  Query,
  Product,
  Category,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log('Server is ready at ' + url);
});
