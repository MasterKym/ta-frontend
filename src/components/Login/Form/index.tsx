import "./styles.scss";
import LoginForm from "./LoginForm";

function Form() {
  return (
    <div className="Login-form w-full flex items-center justify-center">
      <img src="/ball.svg" className="Login-form-ball" />
      <div className="Login-form-wrapper w-full flex flex-col items-start justify-center">
        <div className="Login-form-wrapper-header w-full flex flex-col items-start">
          <img src="/icon.svg" alt="Icon" height={69} width={69} />
          <h1>Login to your account</h1>
          <p>See what is going on with your business</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Form;
