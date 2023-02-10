import { NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { createClient } from "graphql-ws";

const uri = 'https://api-staging.csgoroll.com/graphql';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({
    uri,
    withCredentials: true
  });

  const wss = new GraphQLWsLink(
    createClient({
      url: "wss://api-staging.csgoroll.com/graphql",
      connectionParams: {
        withCredentials: true
      }
    }),
  );

  const link = split(
    ({ query }) => {
      let definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wss,
    http
  )

  return {
    link,
    cache: new InMemoryCache(),
  };
}


@NgModule({
  exports: [ ApolloModule ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [ HttpLink ],
    },
  ],
})
export class GraphQLModule {
}
