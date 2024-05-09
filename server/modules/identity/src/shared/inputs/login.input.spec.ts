import { validate } from 'class-validator';
import { LoginInput } from './login.input';

describe('LoginInput', () => {
  it('should validate successfully with correct data', async () => {
    const input = new LoginInput({ username: 'validusername', passwordHash: '098f6bcd4621d373cade4e832627b4f6' });
    const errors = await validate(input);
    expect(errors.length).toBe(0);
  });

  it('should fail validation with incorrect data', async () => {
    const input = new LoginInput({ username: '', passwordHash: '098f6bcd4621d373cade4e832627b4f6' });
    const errors = await validate(input);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].constraints).toEqual({ isNotEmpty: 'username should not be empty' });
  });
});
