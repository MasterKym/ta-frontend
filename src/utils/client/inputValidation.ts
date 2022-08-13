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

export const validName = (name: string): Boolean => {
  if (name.length < 3 || name.length > 10) {
    return false;
  }

  const re = /^[a-zA-Z]+$/;
  console.log(re.test(name));
  return re.test(name);
}


export const validEmail = (email: string): Boolean => {
  if (email.length < 8 || email.length > 20) {
    return false;
  }

  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

export const validPhone = (email: string): Boolean => {
  if (email.length < 9 || email.length > 10) {
    return false;
  }

  return true
}