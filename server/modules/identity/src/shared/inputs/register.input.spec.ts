import { validate } from "class-validator";
import { RegisterInput } from "./register.input";

describe('RegisterRequest', () => {

  it('should fail validation when username is too short', async () => {
    const registerRequest = new RegisterInput({ username: 'abc', password: 'validpassword', passwordConfirmation: 'validpassword' });
    const errors = await validate(registerRequest);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toEqual({ isLength: 'Username must be between 4 and 20 characters.' });
  });

  it('should fail validation when username is too long', async () => {
    const registerRequest = new RegisterInput({ username: 'a'.repeat(51), password: 'validpassword', passwordConfirmation: 'validpassword' });
    const errors = await validate(registerRequest);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toEqual({ isLength: 'Username must be between 4 and 20 characters.' });
  });

  it('should validate successfully when username length is within the valid range', async () => {
    const registerRequest = new RegisterInput({ username: 'validusername', password: 'validpassword', passwordConfirmation: 'validpassword' });
    const errors = await validate(registerRequest);
    expect(errors.length).toBe(0);
  });

  it('should fail validation when password is not strong', async () => {
    const registerRequest = new RegisterInput({ username: 'validusername', password: 'weak' });
    const errors = await validate(registerRequest);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toEqual({ isStrongPassword: 'password is not strong enough' });
  });

  it('should fail validation when password confirmation does not match password', async () => {
    const registerRequest = new RegisterInput({ username: 'validusername', password: 'validpassword', passwordConfirmation: 'differentpassword' });
    const errors = await validate(registerRequest);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toEqual({ selfValidate: 'Password confirmation does not match password' });
  });

  it('should validate successfully when password confirmation matches password', async () => {
    const registerRequest = new RegisterInput({ username: 'validusername', password: 'validpassword', passwordConfirmation: 'validpassword' });
    const errors = await validate(registerRequest);
    expect(errors.length).toBe(0);
  });
});
