const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./Schema/schema');

const app = express();

// Allow Cross origin requests
app.use(cors());

const port = process.env.PORT || 4000;

// Database connection
// Development
mongoose.connect('mongodb://localhost:27017/BookPlaylist');
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Now listening for requests on port ${port}`);
})