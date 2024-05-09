import {
  equals,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

export const SelfValidate =
  <T>(condition: (object: T) => boolean, options?: ValidationOptions) =>
    (object: T, propertyName: string) =>
      registerDecorator({
        target: object.constructor,
        propertyName,
        options,
        constraints: [condition],
        validator: SelfValidateConstraint<T>,
      });

@ValidatorConstraint({ name: 'selfValidate' })
class SelfValidateConstraint<T> implements ValidatorConstraintInterface {
  validate(value: T, args?: ValidationArguments): boolean {
    const [condition] = args?.constraints || [];
    return condition(args.object);
  }

  defaultMessage(args?: ValidationArguments): string {
    return `${args?.property} value is invalid.`;
  }
}
