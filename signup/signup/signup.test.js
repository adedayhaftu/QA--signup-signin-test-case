const {signup} = require('./signup');
describe('Signup', () => {
  it('Successfully sign up with valid credentials', () => {
      const result = signup('newuser@example.com', 'newpassword');
      expect(result.success).toBe(true);
      expect(result.message).toBe('Signup successful.');
  });
  it('Throw an error if email or password is not provided', () => {
       expect(() => signup('', 'password')).toThrow('Email and password are required.');
      expect(() => signup('email', '')).toThrow('Email and password are required.');
  });
});