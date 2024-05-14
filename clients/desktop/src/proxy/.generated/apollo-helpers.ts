import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type MutationKeySpecifier = ('login' | 'register' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	register?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('_service' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	_service?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenDtoKeySpecifier = ('accessToken' | 'id' | TokenDtoKeySpecifier)[];
export type TokenDtoFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserDtoKeySpecifier = ('id' | 'locked' | 'username' | UserDtoKeySpecifier)[];
export type UserDtoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locked?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _ServiceKeySpecifier = ('sdl' | _ServiceKeySpecifier)[];
export type _ServiceFieldPolicy = {
	sdl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	TokenDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenDtoKeySpecifier | (() => undefined | TokenDtoKeySpecifier),
		fields?: TokenDtoFieldPolicy,
	},
	UserDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserDtoKeySpecifier | (() => undefined | UserDtoKeySpecifier),
		fields?: UserDtoFieldPolicy,
	},
	_Service?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _ServiceKeySpecifier | (() => undefined | _ServiceKeySpecifier),
		fields?: _ServiceFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;