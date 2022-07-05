import { IProfileInputs } from 'lib/types';
const updateProfile = async (
  inputData: IProfileInputs,
  success: () => void,
  failure: (message: string) => void
) => {
  try {
    const res = await fetch('http://localhost:4000/profile', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(inputData),
    });
    if (res.status === 200) success();
    else failure('Invalid input data');
  } catch (err) {
    failure('Error updating profile');
  }
};

export default updateProfile;
