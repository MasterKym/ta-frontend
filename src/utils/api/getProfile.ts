const getProfile = async (success: () => void, failure: () => void) => {
  try {
    const res = await fetch("http://localhost:4000/profile");

    if (res.status === 200) success();
    else failure();
  } catch (err) {
    failure();
  }
};

export default getProfile;
