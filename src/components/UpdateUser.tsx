import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphql/mutations';

function UpdateUser() {
	const [updateUser, { data }] = useMutation(UPDATE_USER);
	const [id, setId] = useState(""),
				[newName, setNewName] = useState(""),
				[newUsername, setNewUsername] = useState("");
	let result = undefined;

	let handle_update = () => {
		updateUser({
			variables: {
				id: id,
				new_name: newName,
				new_username: newUsername
			}
		})
	}

	return (
		<div className="created-user container-fluid">
			<div className="col-md-4"></div>
			<div className="created-user-form container col-md-4 col">
				<h1>Atualiza usuário</h1>

				{data && 
					<div className="created-user-data">
						<div className="created-user-data__behaviour">
							<span className="created-user-data__behaviour_key">Tipo: </span>
							<span className="created-user-data__behaviour_value">{data.updateUser.__typename}</span>
						</div>

						<div className="created-user-data__name">
							<span className="created-user-data__name_key">Status: </span>
							<span className="created-user-data__name_value">{data.updateUser.status}</span>
						</div>

						<div className="created-user-data__behaviour">
							<span className="created-user-data__behaviour_key">Contagem de alterações: </span>
							<span className="created-user-data__behaviour_value">{data.updateUser.count}</span>
						</div>
					</div>
				}
				
				<input 
					className="created-user-form__input form-control"
					type="text" placeholder="ID"
					onChange={ e => setId(e.target.value)}
				/>
				
				<input 
					className="created-user-form__input form-control"
					type="text" placeholder="Novo nome"
					onChange={ e => setNewName(e.target.value)}
				/>

				<input 
					className="created-user-form__input form-control"
					type="text" placeholder="Novo usuário"
					onChange={ e => setNewUsername(e.target.value)}
				/>

				<input
					className="btn btn-dark created-user-form__submit col-md-12"
					type="submit"
					value="Submit"
					onClick={ _ => handle_update() }
				/>
			</div>
			<div className="col-md-4"></div>
		</div>
	)
}

export default UpdateUser
