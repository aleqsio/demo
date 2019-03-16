import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { mockClient } from './apollo';
import CatContainer, { CatContainerFragment } from './CatContainer';

const sampleClient = new ApolloClient({
  uri: "http://yourBackendUrl.com/api/graphql"
});

class AppFragments extends Component {
  render() {
    return (
      <ApolloProvider client={mockClient}>
      <Query
          query={gql`
            {
              cats {
                ...CatContainerFragment
              }
            }
            ${CatContainerFragment}
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.cats.map((data) => (
              <CatContainer {...data}/>
            ));
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default AppFragments;
