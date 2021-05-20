import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
	query UserQuery {
  	getAllUsers {
  	  id,
  	  name,
  	  username,
  	  password,
  	  behaviour
  	}
	}
`;