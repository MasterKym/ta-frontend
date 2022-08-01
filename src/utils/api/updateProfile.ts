const updateProfile = (
  formData: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    phone: string;
  },
  success: (data: any) => void,
  failure: (err: any) => void
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch('http://localhost:4000/profile', {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res?.json();
      if (res.status === 200) {
        success(data);
        resolve('success');
      } else {
        // failed, reject promise
        failure(data);
        reject('something went wrong while updating profile.');
      }
    } catch (err) {
      failure(err);
      reject('Server error. Please try again later!');
    }
  });
};

export default updateProfile;
