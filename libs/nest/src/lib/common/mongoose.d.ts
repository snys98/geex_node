declare type Hint<T> = {
  [K in keyof T]?: T[K];
} & {
  [key: string]: any;
};
