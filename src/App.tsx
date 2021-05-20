import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import "./styles/index.css"
import CreateUser from './components/CreateUser';

function App() {
	const client = new ApolloClient({
		uri: "https://arq-software-graphql-back.herokuapp.com/graphql",
		cache: new InMemoryCache(), 
	});

  return (
		<>
			<ApolloProvider client={client}>
				<div className="app-container container-fluid">
					<div className="d-flex container-fluid">
						<CreateUser />
					</div>
				</div>
			</ApolloProvider>
		</>
  );
}

export default App;
