import { ReactComponent as MenuSvg } from "../../Assets/Svg/menu.svg";
import { ReactComponent as ArrowLeftSvg } from "../../Assets/Svg/arrow-left.svg";
import "./SideBar.scss";
import { ReactComponent as Logo } from "../../Assets/Svg/logo.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";

export default function SideBar() {
  const dispatch = useAppDispatch();
  const { response, loading, error } = useAppSelector((state) => state.total);
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState("2020-04-01");
  useEffect(() => {
    dispatch({ type: "SET_TOTAL", payload: { date } });
    console.log("service call");
  }, [date, dispatch]);

  return (
    <div className={"sideBar " + (open ? "open" : "close")}>
      <div className="sideBar__head">
        {open ? (
          <ArrowLeftSvg
            onClick={() => setOpen(false)}
            className="sideBar__head__back"
          />
        ) : (
          <MenuSvg
            onClick={() => setOpen(true)}
            className="sideBar__head__menu"
          />
        )}
      </div>
      <div className="sideBar__main">
        <Logo></Logo>
        <div className="sideBar__main__table">
          <label htmlFor="date">
            <input
              type="date"
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </label>
          <p>
            <span>Date</span>
            <span>{response?.date}</span>
          </p>
          <p>
            <span>Last Updated</span>
            <span>{response?.last_update}</span>
          </p>
          <p>
            <span>Confirmed</span>
            <span>{response?.confirmed}</span>
          </p>
          <p>
            <span>Deaths</span>
            <span>{response?.deaths}</span>
          </p>
          <p>
            <span>Recovered</span>
            <span>{response?.recovered}</span>
          </p>
          <p>
            <span>Active</span>
            <span>{response?.active}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
