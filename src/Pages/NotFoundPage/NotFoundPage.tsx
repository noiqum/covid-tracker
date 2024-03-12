import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
import ImageSource from "../../Assets/Svg/404.svg";

export const NotFoundPage = () => {
  return (
    <div className="NotFoundPage">
      <div className="NotFoundPage__image">
        <img src={ImageSource} alt="404" />
      </div>
      <div className="NotFoundPage__text">
        <p>Sorry</p>
        <p> Country not found</p>
        <p>
          we could not find the country you are looking for please go back to
          the <Link to="/">Homepage</Link>.
        </p>
      </div>
    </div>
  );
};
