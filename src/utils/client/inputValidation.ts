export const validUsername = (username: string): boolean => {
  // checking length
  if (username.length < 5 || username.length > 51) {
    return false;
  }

  // checking if username contains only letters and numbers and at most one underscore
  const re = /^(?=.{4})[a-z][a-z\d]*_?[a-z\d]+$/i;
  return re.test(String(username).toLowerCase());
};

export const validPassword = (password: string): boolean => {
  // checking length
  if (password.length < 8 || password.length > 21) {
    return false;
  }

  // checking if password contains only letters and numbers
  const re = /^(?=.*\d).{8,}$/;
  return re.test(password);
};
