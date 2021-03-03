const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Autor!
    thumbnail: String!
    length: Int
    moduleCount: Int
  }

  type Autor {
    id: ID!
    name: String
    photo: String
  }
`;

module.exports = typeDefs;
