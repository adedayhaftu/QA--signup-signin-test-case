const signup = (email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required credentials.');
    }
    return { success: true, message: 'Signup is successful.' };
  };
  module.exports = {signup };