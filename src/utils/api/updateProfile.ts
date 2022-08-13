const updateProfile = (formData: {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  dateOfBirth: string,
  phone: string
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch("http://localhost:4000/profile", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        resolve("success");
      } else {
        // failed, reject promise
        reject("Invalid username or password");
      }
    } catch (err) {
      reject("Server error. Please try again later!");
    }
  });
};

export default updateProfile;
