import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries';

function GetUsers() {
	const { data, refetch } = useQuery(GET_ALL_USERS);

	let fetch_list: any = [];
	let fetch_data = undefined;

	let _mapping = (item: any) => {
		return (
			<div className="created-user-data">
			
			<div className="created-user-data__name">
				<span className="created-user-data__name_key">Tipo: </span>
				<span className="created-user-data__name_value">{item.__typename}</span>
			</div>

			<div className="created-user-data__name">
				<span className="created-user-data__name_key">ID: </span>
				<span className="created-user-data__name_value">{item.id}</span>
			</div>
			
			<div className="created-user-data__name">
				<span className="created-user-data__name_key">Nome: </span>
				<span className="created-user-data__name_value">{item.name}</span>
			</div>

			<div className="created-user-data__username">
				<span className="created-user-data__username_key">Usuário: </span>
				<span className="created-user-data__username_value">{item.username}</span>
			</div>

			<div className="created-user-data__password">
				<span className="created-user-data__password_key">Senha: </span>
				<span className="created-user-data__password_value">{item.password}</span>
			</div>

			<div className="created-user-data__behaviour">
				<span className="created-user-data__behaviour_key">Comportamento: </span>
				<span className="created-user-data__behaviour_value">{item.behaviour}</span>
			</div>
		</div>
		);
	}

	if (data) {
		fetch_data = data.getAllUsers.slice(data.getAllUsers.length - 5, data.getAllUsers.length);
		fetch_data.forEach((el: any) => fetch_list.push(_mapping(el)));
	}
	
	return (
		<div className="created-user-get-users container-fluid">
			<div className="col-md-4"></div>
			<div className="created-user-form container col-md-4 col">
				<div className="row">
					<div className="col-md-12">
						<h1>Users recentes (últimos 5)</h1>
					</div>
					<div className="hidden-block">{ setTimeout(function() { refetch(); }, 5000) }</div>
				</div>
				{data && fetch_list.length > 0 && fetch_list }
				{!data && 
					<div>
						<div className="col-md-4"></div>
						<h1 className="col-md-4">CARREGANDO</h1>
						<div className="col-md-4"></div>
					</div>
				}
			</div>
			<div className="col-md-4"></div>
		</div>
	)
}

export default GetUsers
