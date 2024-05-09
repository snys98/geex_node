import type { Request } from 'express';
export declare type UserProfile = {
  sub: string;
  id: number;
  username: string;
  iat: number;
  exp: number;
};

export declare type Editable<T> = { -readonly [K in keyof T]: T[K] };
export declare type GqlContext = { req: Request, user: Partial<UserProfile> };
export declare type PrimitiveType = string | number | boolean | null | undefined | Date | symbol | bigint;
export declare type Hint<T> = { [P in keyof T]?: T[P] extends PrimitiveType ? T[P] : Hint<T[P]> } & Record<string | number | symbol, any>;
export declare type HintWithValueType<T, TType> = { [P in keyof T]?: T[P] extends PrimitiveType ? TType : Hint<T[P]> } & Record<string | number | symbol, TType>;

type NonFunctionKeyNames<T> = Exclude<{
  [key in keyof T]: T[key] extends Function ? never : key;
}[keyof T], undefined>;
type RemoveFunctions<T> = Pick<T, NonFunctionKeyNames<T>>;
export declare type DtoOf<T> = RemoveFunctions<T>;
