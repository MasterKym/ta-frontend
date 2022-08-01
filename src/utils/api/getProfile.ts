const getProfile = async (
  success: (data: any) => void,
  failure: (error: any) => void
) => {
  try {
    const res = await fetch('http://localhost:4000/profile', {
      credentials: 'include',
    });

    const data = await res.json();
    if (res.status === 200) success(data);
    else failure(data);
  } catch (err) {
    failure(err);
  }
};

export default getProfile;
