import { validUsername, validPassword } from "utils/client/inputValidation";
export const loginForm = [
    {
      label: "Username:",
      type: "username",
      HTMLtype: "username",
      name: "username",
      placeholder: "Enter your Username",
      required: true,
      validation: (value: string) => {
        // if username is empty
        if (!value.length) return "Username is required";
  
        // if username is invalid
        if (!validUsername(value)) return "Username is invalid";
  
        // if valid
        return null;
      },
    },
    {
      label: "Password:",
      HTMLtype: "password",
      subLabel: "Must contain at least a digit",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      required: true,
      validation: (value: string) => {
        // if password is empty
        if (!value.length) return "Password is required";
  
        // if password is invalid
        if (!validPassword(value)) return "Password is invalid";
        // if valid
        return null;
      },
    },
  ];
  
  export const signupForm = [
    {
      label: "Username:",
      type: "username",
      HTMLtype: "username",
      name: "username",
      placeholder: "Enter your Username",
      required: true,
      validation: (value: string) => {
        // if username is empty
        if (!value.length) return "Username is required";
  
        // if username is invalid
        if (!validUsername(value)) return "Username is invalid";
  
        // if valid
        return null;
      },
    },
    {
      label: "First Name:",
      HTMLtype: "text",
      type: "text",
      name: "firstname",
      placeholder: "Enter your firstname",
      required: true,
    },
    {
      label: "Last Name:",
      HTMLtype: "text",
      type: "text",
      name: "lastname",
      placeholder: "Enter your lastname",
      required: true,
    },
    {
      label: "Email",
      HTMLtype: "email",
      type: "email",
      name: "lastname",
      placeholder: "Enter your email",
      required: true,
    },
    {
      label: "Password:",
      HTMLtype: "password",
      subLabel: "Must contain at least a digit",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      required: true,
      validation: (value: string) => {
        // if password is empty
        if (!value.length) return "Password is required";
  
        // if password is invalid
        if (!validPassword(value)) return "Password is invalid";
  
        // if valid
        return null;
      },
    },
    {
      label: "Confirm Password:",
      HTMLtype: "password",
      type: "password",
      name: "Confirmpassword",
      placeholder: "Enter your password",
      required: true,
      validation: (value: string) => {
        // if password is empty
        if (!value.length) return "Password is required";
  
        // if password is invalid
        if (!validPassword(value)) return "Password is invalid";
        
        // if valid
        return null;
      },
    },
  ];
  