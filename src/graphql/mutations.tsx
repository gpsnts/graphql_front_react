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