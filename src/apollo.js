import { ApolloLink, Observable } from "apollo-link";
import { graphql, print } from "graphql";

import { mockSchema } from "./mockSchema";
import { ApolloClient, InMemoryCache } from "apollo-boost";

const link = new ApolloLink(operation => {
  return new Observable(observer => {
    const { query, operationName, variables } = operation;
    delay(1500)
      .then(() =>
        graphql(mockSchema, print(query), null, null, variables, operationName),
      )
      .then(result => {
        observer.next(result);
        observer.complete();
      })
      .catch(observer.error.bind(observer));
  });
});

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export const mockClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
