"use client";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { FC, ReactNode } from 'react';

interface IApolloProviderProps{
    children :ReactNode;
}


const ApolloProviderLayout : FC<IApolloProviderProps> = ({children}) => {

    const client = new ApolloClient({
        uri: 'https://graphqlzero.almansi.me/api',
        cache: new InMemoryCache(),
    });

  return (
    <>
      <ApolloProvider client={client} >
        {children}
      </ApolloProvider>
    </>
  )
}

export default ApolloProviderLayout
