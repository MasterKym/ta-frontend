import { IProfileData } from 'lib/types';
const getProfile = async (
  success: (profile: IProfileData) => void,
  failure: () => void
) => {
  try {
    const res = await fetch('http://localhost:4000/profile', {
      credentials: 'include',
    });
    const data = await res.json();
    if (res.status === 200) success(data);
    else failure();
  } catch (err) {
    failure();
  }
};

export default getProfile;
