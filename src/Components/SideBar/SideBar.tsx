import { ReactComponent as MenuSvg } from "../../Assets/Svg/menu.svg";
import { ReactComponent as ArrowLeftSvg } from "../../Assets/Svg/arrow-left.svg";
import "./SideBar.scss";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBar__head">
        <MenuSvg className="sideBar__head__menu" />
        <ArrowLeftSvg className="sideBar__head__back" />
      </div>
      <div className="SideBar__main"></div>
    </div>
  );
}
