import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { mockClient } from './apollo';
import './App.css'

const sampleClient = new ApolloClient({
  uri: "http://yourBackendUrl.com/api/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={mockClient}>
      <Query
          query={gql`
            {
              cats {
                name
                rating
                likes
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.cats.map(({ name, rating, likes }) => (
              <div key={name} className="catContainer">
                <h1>{name}</h1>
                <h2>{rating}/5</h2>
                <h3>{likes} likes</h3>
              </div>
            ));
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
