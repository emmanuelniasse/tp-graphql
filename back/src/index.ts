import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from '../../graphql/src/schema.ts';
import "./db.ts";

const books = [
	{ title: "The Awakening", author: "Kate Chopin" },
	{ title: "City of Glass", author: "Paul Auster" },
];
const resolvers = {
	Query: {
		books: () => books,
	},
};
const server = new ApolloServer({
	typeDefs,
	resolvers,
});
const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
