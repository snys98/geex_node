import { type ClassConstructor } from "class-transformer";

// todo: make this common function easier to use, maybe with decorators or configurations
export function modelToDto<TModel, TDto>(model: Partial<TModel>, dtoCtor: ClassConstructor<TDto>, ...propsToMap: Array<keyof TDto>) {
  if (model == undefined) {
    return undefined;
  }
  else {
    return propsToMap.reduce((obj, key) => {
      if (model.hasOwnProperty(key)) {
        obj[key] = model[key as any];
      }
      return obj;
    }, new dtoCtor() as Partial<TDto>);
  }
}
