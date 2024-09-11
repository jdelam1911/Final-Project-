require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const session = require('express-session');
const sequelize = require('./config/db');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Apollo Server setup
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app });
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Sync Sequelize and start the server
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}${apolloServer.graphqlPath}`));
});
