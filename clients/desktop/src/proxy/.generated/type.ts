import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _Any: { input: any; output: any; }
  federation__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
}

export interface LoginInput {
  passwordHash: Scalars['String']['input'];
  username: Scalars['String']['input'];
}

export interface Mutation {
  __typename?: 'Mutation';
  login: TokenDto;
  register: UserDto;
}


export interface MutationLoginArgs {
  input: LoginInput;
}


export interface MutationRegisterArgs {
  input: RegisterInput;
}

export interface Query {
  __typename?: 'Query';
  _service: _Service;
  users: Array<UserDto>;
}

export interface RegisterInput {
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  username: Scalars['String']['input'];
}

export interface TokenDto {
  __typename?: 'TokenDto';
  accessToken: Scalars['String']['output'];
  id: Scalars['ID']['output'];
}

export interface UserDto {
  __typename?: 'UserDto';
  id: Scalars['ID']['output'];
  locked: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
}

export interface _Service {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']['output']>;
}

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  passwordHash: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'TokenDto', accessToken: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserDto', id: string, username: string, locked: boolean }> };


export const LoginGql = gql`
    mutation Login($username: String!, $passwordHash: String!) {
  login(input: {username: $username, passwordHash: $passwordHash}) {
    accessToken
  }
}
    ` as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const UsersGql = gql`
    query users {
  users {
    id
    username
    locked
  }
}
    ` as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;