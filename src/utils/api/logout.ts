const logout = (success: (data: any) => void, failure: (data: any) => void) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch('http://localhost:4000/profile/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: null,
      });
      const data = await res?.json();
      if (res.status === 200) {
        return success(data);
      } else {
        // failed, reject promise
        return failure(data);
      }
    } catch (err) {
      return failure(err);
    }
  });
};

export default logout;
