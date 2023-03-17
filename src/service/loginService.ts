import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($userLogin: LoginUserInput!) {
    user: loginUser(userLogin: $userLogin) {
      token
      user {
        _id
        firstName
        lastName
        email
        city
        state
        country
        contact
        role
        address
        streetAddress1
        streetAddress2
        pinCode
        profession
        service
        organisation
        bussiness
        message
      }
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: createUser(userNew: $userNew) {
      _id
      firstName
      lastName
      email
      password
      city
      state
      country
      contact
      role
      address
      streetAddress1
      streetAddress2
      pinCode
      profession
      service
      organisation
      bussiness
      message
    }
  }
`;
