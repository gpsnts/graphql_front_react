import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../graphql/mutations';

function DeleteUser() {
	const [deleteUser, { data }] = useMutation(DELETE_USER);
	const [id, setId] = useState("");
	let result = undefined;
	
	let _valid_length = (arg: string) => {
		return arg.length > 0;
	}

	let _can_send = _valid_length(id);

	let handle_delete = () => {
		if (_can_send) {
			deleteUser({ variables: { id } });
			result = data.deleteUser;
		}
	}

	return (
		<div className="created-user container-fluid">
			<div className="col-md-4"></div>
			<div className="created-user-form container col-md-4 col">
				<h1>Deletar usuário</h1>

				{data && 
					<div className="created-user-data">
						<div className="created-user-data__behaviour">
							<span className="created-user-data__behaviour_key">Tipo: </span>
							<span className="created-user-data__behaviour_value">{data.deleteUser.__typename}</span>
						</div>

						<div className="created-user-data__name">
							<span className="created-user-data__name_key">Status: </span>
							<span className="created-user-data__name_value">{data.deleteUser.status}</span>
						</div>

						<div className="created-user-data__behaviour">
							<span className="created-user-data__behaviour_key">Contagem de alterações: </span>
							<span className="created-user-data__behaviour_value">{data.deleteUser.count}</span>
						</div>
					</div>
				}
				
				<input 
					className="created-user-form__input form-control"
					type="text" placeholder="ID"
					onChange={ e => setId(e.target.value)}
				/>
				<input
					className="btn btn-dark created-user-form__submit col-md-12"
					type="submit"
					value="Submit"
					onClick={ _ => handle_delete() }
				/>
			</div>
			<div className="col-md-4"></div>
		</div>
	)
}

export default DeleteUser
