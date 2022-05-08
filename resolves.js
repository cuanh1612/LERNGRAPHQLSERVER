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

const authors = [
  {
    name: "Kate Chopin",
    books: [
      {
        title: "Te Awakening",
        author: "Kate Chopin",
      },
    ],
  },
  {
    name: "Paul Auster",
    books: [
      {
        title: "City of Glass",
        author: "Paul Auster",
      },
    ],
  },
];

const events = [
  {
    name: "event 1",
    date: "12/12/2021",
    location: {
      name: "Viet Name",
      weather: {
        temperature: 28,
        description: "event 1 description",
      },
    },
  },
  {
    name: "event 2",
    date: "12/12/2021",
    location: {
      name: "Viet Name",
      weather: {
        temperature: 32,
        description: "event 2 description",
      },
    },
  },
];

//Define a resolver
export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },

  Mutation: {
    addBook: (_, { title, author }) => {
      return {
        title,
        author,
      };
    },

    createBlogPost: (_, { content }) => {
      console.log(content.MediaDetails);
      return {
        title: content.title,
        body: content.body,
        media: [...content.media],
      };
    },

    favoriteColor: () => {
      return "RED";
    },

    avatar: (_, { borderColor }) => {
      return borderColor;
    },

    upcomingEvents: () => {
      return events;
    },

    addUser: (_, { id, name, email }) => {
      return {
        code: 200,
        success: true,
        message: "Created new user successfully",
        user: {
          id,
          name,
          email,
        },
      };
    },
  },
};
