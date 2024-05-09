import { User, UserDocument } from "../../src/user/user.entity";

// extra properties are added to the mock data to simulate the mongoose model, and the save method is mocked to prevent the actual save operation from being executed. 
function mockModelBehavior<T extends object>(behavior: (this: T) => any) {
  return jest.fn(function (this: T) {
    behavior.bind(this)();
    return this;
  })
}
const userMockBehaviors = {
  save: jest.fn(),
  lock: mockModelBehavior<UserDocument>(function () { this.locked = true }),
  unlock: mockModelBehavior<UserDocument>(function () { this.locked = false }),
  toObject: jest.fn().mockReturnThis()
}
// This is a common pattern when mocking data in tests.The mockData object is then exported for use in the tests.
export const mockData = {
  users: [
    {
      _id: "000000000000000000000001",
      id: "000000000000000000000001",
      username: 'test',
      password: 'test',
      passwordHash: '098f6bcd4621d373cade4e832627b4f6',
      locked: false,
      ...userMockBehaviors
    }
  ]
}
