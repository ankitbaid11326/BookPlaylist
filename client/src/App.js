import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

// Compoenents
import BookList from './components/BookList';
import AddBook from './components/AddBook'

// apollo client setup
const client = new ApolloClient({
  uri: 'https://readbook-store.herokuapp.com/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id={'main'}>
          <h1> Book Playlist </h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
