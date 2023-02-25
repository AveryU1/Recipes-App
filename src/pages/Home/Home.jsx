import { LoginButton } from "../../features/LoginButton/LoginButton";
import { LogoutButton } from "../../features/LogoutButton/LogoutButton";
import { Profile } from "../../features/Profile/Profile";
import "./Home.scss";
export const Home = () => {
  return (
    <div className="home-container">
      <section className="img-container">
        {/* <img src={loginHomeImg} alt="login-home-img" /> */}
      </section>
      <section className="home-text">
        <h1>
          Cooking a Healthy and <br /> Delicious Food <br /> Easily
        </h1>
        <p>
          Discover more than One Thousand food recipes and impress your guests
        </p>
        <Profile />
      </section>
      <section className="btn-container">
        <nav>
          <LoginButton />
          <LogoutButton />
        </nav>
      </section>
    </div>
  );
};
