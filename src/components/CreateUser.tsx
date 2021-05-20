import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

function CreateUser() {
	const [name, setName] = useState(""),
				[username, setUsername] = useState(""),
				[password, setPassword] = useState(""),
				[behaviour, setBehaviour] = useState("");

	const [createUser, { error, data }] = useMutation(CREATE_USER);

	let _valid_length = (arg: string) => {
		return arg.length > 0;
	}

	let _can_send = _valid_length(name) && _valid_length(username) && _valid_length(password);

	let handle_creation = () => {
		if (_can_send) {
			createUser({
				variables: {
					name,
					username,
					password,
					behaviour
				}
			});
		}
	}

	let result = undefined;
	
	if (error)	result = error;
	if (data) 	result = { ...data.createUser };

	return (
		<div className="created-user container-fluid">
			<div className="col-md-4"></div>
			<div className="created-user-form container col-md-4 col">
				<h1>Criação de User</h1>
			{	result &&
					<div className="created-user-data">
						<div className="created-user-data__name">
							<span className="created-user-data__name_key">Tipo: </span>
							<span className="created-user-data__name_value">{result.__typename}</span>
						</div>

						<div className="created-user-data__name">
							<span className="created-user-data__name_key">Nome: </span>
							<span className="created-user-data__name_value">{result.name}</span>
						</div>

						<div className="created-user-data__username">
							<span className="created-user-data__username_key">Usuário: </span>
							<span className="created-user-data__username_value">{result.username}</span>
						</div>

						<div className="created-user-data__password">
							<span className="created-user-data__password_key">Senha: </span>
							<span className="created-user-data__password_value">{result.password}</span>
						</div>

						<div className="created-user-data__behaviour">
							<span className="created-user-data__behaviour_key">Comportamento: </span>
							<span className="created-user-data__behaviour_value">{result.behaviour}</span>
						</div>
					</div>
				}

				{
					error &&
					<div className="created-user-error">
						<b className="created-user-error__error">Não foi possível criar o User</b>
					</div>
				}

				<input className="created-user-form__input form-control" type="text" placeholder="Name" 			onChange={ e => setName(e.target.value)} />
				<input className="created-user-form__input form-control" type="text" placeholder="Username" 	onChange={ e => setUsername(e.target.value)} />
				<input className="created-user-form__input form-control" type="text" placeholder="Password" 	onChange={ e => setPassword(e.target.value) } />
				<input className="created-user-form__input form-control" type="text" placeholder="Behaviour" 	onChange={ e => setBehaviour(e.target.value) } />
						
				<input
					className="btn btn-dark created-user-form__submit col-md-12"
					type="submit"
					value="Submit"
					onClick={ _ => handle_creation() }
				/>
				
			</div>
			<div className="col-md-4"></div>
		</div>
	)
}

export default CreateUser
