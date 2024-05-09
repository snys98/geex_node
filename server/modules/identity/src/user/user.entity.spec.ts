import { User } from "./user.entity";

describe('User', () => {
  it('should correctly set username in constructor', () => {
    const user = new User('testuser');
    expect(user.username).toEqual('testuser');
  });

  it('should lock the user', () => {
    const user = new User('testuser');
    user.lock();
    expect(user.locked).toBe(true);
  });

  it('should unlock the user', () => {
    const user = new User('testuser');
    user.lock();
    user.unlock();
    expect(user.locked).toBe(false);
  });
});
