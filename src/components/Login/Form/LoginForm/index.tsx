import { Button, Input } from "components";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { validUsername, validPassword } from "utils/inputValidation";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // react router navigation
  const navigate = useNavigate();

  // submitting state
  const [submitting, setSubmitting] = useState(false);

  // formData state
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });

  // error state
  const [error, setError] = useState<{
    global: string | null;
    username: string | null;
    password: string | null;
  }>({
    global: null,
    username: null,
    password: null,
  });

  // submit form handler
  const submitForm = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch("http://localhost:4000/login", {
          method: "POST",
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

  // handle on submit
  const handleSubmit = async () => {
    setSubmitting(true);

    if (error.username || error.password || error.global)
      return setSubmitting(false);

    submitForm()
      .then(() => {
        setSubmitting(false);
        navigate("/settings");
      })
      .catch((err) => {
        setSubmitting(false);
        setError({
          ...error,
          global: err,
        });
      });
  };

  useEffect(() => {
    // setting global error to null on input change
    setError({ ...error, global: null });
  }, [formData]);

  return (
    <div className="Login-form-wrapper-form w-full flex flex-col items-start">
      {error.global && (
        <div className="Login-form-wrapper-form-error">
          <p>{error.global}</p>
        </div>
      )}
      {form.map((field, i) => (
        <Input
          key={i}
          type={field.type}
          HTMLtype={field.HTMLtype}
          name={field.name}
          label={field.label}
          subLabel={field.subLabel}
          required={field.required}
          placeholder={field.placeholder}
          error={error[field.name as keyof typeof error]}
          value={formData[field.name as keyof typeof formData]}
          onChange={(newValue: string | boolean) => {
            // setting new value
            setFormData({ ...formData, [field.name]: newValue });

            // checking if value is valid
            let notValid = field.validation(newValue as string);

            if (notValid) {
              setError({ ...error, [field.name]: notValid });
            } else {
              setError({ ...error, [field.name]: null });
            }
          }}
        />
      ))}
      <Button
        type="main"
        className="w-full"
        disabled={submitting}
        size="md"
        onClick={handleSubmit}
      >
        {!submitting ? (
          <>
            Submit
            <span>
              <BsArrowRightShort />
            </span>
          </>
        ) : (
          "Submitting..."
        )}
      </Button>
    </div>
  );
}

const form = [
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

export default LoginForm;
