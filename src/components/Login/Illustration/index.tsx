import "./styles.scss";

function Illustration() {
  return (
    <div className="Login-illustration w-full relative">
      <div className="Login-illustration-text w-full h-full absolute">
        <div className="text">
          <h4>Turn your ideas into reality.</h4>
          <p>Start for free and get attractive offers from the community</p>
        </div>
      </div>
      <div className="Login-illustration-image w-full h-full absolute">
        <img
          src="/illustration.png"
          alt="Illustration"
          className="covered-img"
        />
      </div>
    </div>
  );
}

export default Illustration;
