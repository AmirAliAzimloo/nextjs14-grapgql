"use client";

import { FC, ReactNode } from "react";
import ApolloProviderLayout from "./grapghql";

interface IAppProvidersProps{
    children : ReactNode;
}

const AppProviders : FC<IAppProvidersProps> = ({children}) => {
  return (
    <>
    <ApolloProviderLayout>
      {children}
    </ApolloProviderLayout>
    </>
  )
}

export default AppProviders
