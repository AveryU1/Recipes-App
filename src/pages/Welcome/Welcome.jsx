import { LoginButton } from "../../features/LoginButton/LoginButton";
import { Profile } from "../../features/Profile/Profile";
import { useAuth } from "../../context/authContext";
import { RegisterButton } from "../../features/RegisterButton/RegisterButton";
import "./Welcome.scss";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="home-container">
      <section className="img-container">
        {/* <img src={loginHomeImg} alt="login-home-img" /> */}
      </section>
      <div className="hero-container">
        <section className="home-text">
          <h1>
            Cooking a Healthy and <br /> Delicious Food <br /> Easily
          </h1>
          <p>
            Discover more than One Thousand food recipes and impress your guests
          </p>
        </section>
        <section className="btn-container">
          <nav>
            <Link to="/login">
              <LoginButton />
            </Link>
            <Link to="/register">
              <RegisterButton />
            </Link>

            {/* <LogoutButton /> */}
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
