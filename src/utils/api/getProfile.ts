const getProfile = async (success: () => void, failure: () => void) => {
  try {
    const res = await fetch("http://localhost:4000/profile", {
      credentials: "include",
    });

    if (res.status === 200) success();
    else failure();
  } catch (err) {
    failure();
  }
};

export default getProfile;
