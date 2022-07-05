const signOut = async (success: () => void, failure: () => void) => {
  try {
    const res = await fetch('http://localhost:4000/signout', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
    if (res.status === 200) success();
    else failure();
  } catch (err) {
    failure();
  }
};
export default signOut;
