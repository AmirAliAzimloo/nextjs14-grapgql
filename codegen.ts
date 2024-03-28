import type { CodegenConfig } from "@graphql-codegen/cli";


const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://graphqlzero.almansi.me/api',
  documents: ["src/**/*.graphql", "src/**/*.ts", "src/**/*.tsx", "src/**/*.gql"],
  generates: {
    "src/libs/grapghql/graphqlTypes/": {
      preset: "client",
      plugins: [],
    },
    "./generated-types.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
