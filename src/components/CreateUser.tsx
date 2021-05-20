import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

function CreateUser() {
	const [name, setName] = useState(""),
				[username, setUsername] = useState(""),
				[password, setPassword] = useState(""),
				[behaviour, setBehaviour] = useState("");

	const [createUser, { error, data }] = useMutation(CREATE_USER);
	
	return (
		<div className="user-creation">
			<input type="text" placeholder="Name" 			onChange={ e => setName(e.target.value)} />
			<input type="text" placeholder="Username" 	onChange={ e => setUsername(e.target.value)} />
			<input type="text" placeholder="Password" 	onChange={ e => setPassword(e.target.value) } />
			<input type="text" placeholder="Behaviour" 	onChange={ e => setBehaviour(e.target.value) } />
					
			<input 
				type="submit"
				value="Submit"
				onClick={ _ => createUser({
					variables: {
						name,
						username,
						password,
						behaviour
					}
				})
			} />
		</div>
	)
}

export default CreateUser
