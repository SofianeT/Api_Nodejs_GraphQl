import express from "express";
import resolvers from "./graphql/resolvers.js";
import schema from "./graphql/schema.js";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use(express.static("public"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3000, console.log("Server is running on port 3000"));
