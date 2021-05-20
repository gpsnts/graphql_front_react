import React, { useRef } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Glide from 'react-glidejs';

import "./styles/index.css"
import CreateUser from './components/CreateUser';
import GetUsers from './components/GetUsers';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';

function App() {
	const gliderRef = useRef(null);
	const client = new ApolloClient({
		uri: "https://arq-software-graphql-back.herokuapp.com/graphql",
		cache: new InMemoryCache(), 
	});

  return (
		<>
			<ApolloProvider client={client}>
				<div className="app-container container-fluid">
					<Glide
						className="app-container d-flex container-fluid"
      		  ref={gliderRef}
      		  throttle={0}
      		  type="slider"
      		  slideClassName="slider__frame"
      		  focusAt="center"
						hideArrows={true}
      		>
						<CreateUser />
						<GetUsers />
						<DeleteUser />
						<UpdateUser />
      		</Glide>
				</div>
			</ApolloProvider>
		</>
  );
}

export default App;
