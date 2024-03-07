import { ReactComponent as MenuSvg } from "../../Assets/Svg/menu.svg";
import { ReactComponent as ArrowLeftSvg } from "../../Assets/Svg/arrow-left.svg";
import "./SideBar.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { setTotal } from "../../store/totalSlice";
export default function SideBar() {
  const dispatch = useAppDispatch();
  const { response, loading, error } = useAppSelector((state) => state.total);
  const [date] = useState("2020-04-01");

  useEffect(() => {
    dispatch(setTotal({ date: date }));
  }, [date, dispatch]);

  return (
    <div className="sideBar">
      <div className="sideBar__head">
        <MenuSvg className="sideBar__head__menu" />
        <ArrowLeftSvg className="sideBar__head__back" />
      </div>
      <div className="SideBar__main">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error {error}</div>
        ) : (
          <div>{response?.date}</div>
        )}
      </div>
    </div>
  );
}
