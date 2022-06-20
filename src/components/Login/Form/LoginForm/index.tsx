import { Button, Input } from "components";
import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { validUsername, validPassword } from "utils/client/inputValidation";
import { useNavigate } from "react-router-dom";
import submitLogin from "utils/api/submitLogin";
import getProfile from "utils/api/getProfile";

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

  // handle on submit
  const handleSubmit = async () => {
    setSubmitting(true);

    if (error.username || error.password || error.global)
      return setSubmitting(false);

    submitLogin(formData)
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

  // on component mount, we will check if the user is already logged in
  useEffect(() => {
    const success = () => {
      // it means the user is already logged in, redirect to /settings!
      navigate("/settings");
    };

    getProfile(success, () => {});
  }, []);

  // on formData change
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
