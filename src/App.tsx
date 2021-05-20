import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CreateUser from './components/CreateUser';

function App() {
	const client = new ApolloClient({
		uri: "https://arq-software-graphql-back.herokuapp.com/graphql",
		cache: new InMemoryCache(), 
	});

  return (
		<>
			<ApolloProvider client={client}>
				<CreateUser />
			</ApolloProvider>
		</>
  );
}

export default App;
