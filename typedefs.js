import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Author {
    name: String! # Can't return null
    books: [Book!]! #This list can't be null and its list items can't be null
  }

  type Post {
    title: String
    body: String
    media: [MediaDetail!]
  }

  type MediaDetail {
    format: MediaFormat!
    url: String!
  }

  type Event {
    name: String!
    date: String!
    location: Location
  }

  type Location {
    name: String!
    weather: WeatherInfor
  }

  type WeatherInfor {
    temperature: Float
    description: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  #input type
  input BlogPostContent {
    title: String
    body: String
    media: [MediaDetails!]
  }

  input MediaDetails {
    format: MediaFormat!
    url: String!
  }

  #enum type
  enum MediaFormat {
    IMAGE
    VIDEO
  }

  enum AllowedColor {
    RED
    GREEN
    BLUE
  }

  #Mutation response
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type CreateUserMuationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }

  #type query
  type Query {
    books: [Book]
    authors: [Author]
  }

  #type mutation
  type Mutation {
    addBook(title: String, author: String): Book
    createBlogPost(content: BlogPostContent!): Post
    favoriteColor: AllowedColor
    avatar(borderColor: AllowedColor): String
    upcomingEvents: [Event!]!
    addUser(id: ID!, name: String!, email: String!): CreateUserMuationResponse
  }
`;
