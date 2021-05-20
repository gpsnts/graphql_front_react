import { gql } from '@apollo/client';

export const CREATE_USER = gql`
	mutation UserCreateMutation(
	  $name: String!,
	  $username: String!,
	  $password: String!
	  $behaviour: String
	) {
  createUser(name: $name, username: $username, password: $password, behaviour: $behaviour) {
    name
    username
    password
    behaviour
  }
}	
`;

export const DELETE_USER = gql`
	mutation DeleteUser($id: ID) {
  	deleteUser(id: $id) {
  	  status,
  	  count
  	}
	}
`;

export const UPDATE_USER = gql`
	mutation UpdateUser($id: ID, $new_name: String, $new_username: String) {
		updateUser(id: $id, new_name: $new_name, new_username: $new_username) {
			status,
  		count
		}
	}
`;