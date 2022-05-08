import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

//Define your data set
const books = [
  {
    title: "Te Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

//Define a resolver
const resolvers = {
  Query: {
    books: () => books,
  },
};

//Create an instance of apolloserver
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
