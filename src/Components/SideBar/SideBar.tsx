import { ReactComponent as MenuSvg } from "../../Assets/Svg/menu.svg";
import { ReactComponent as ArrowLeftSvg } from "../../Assets/Svg/arrow-left.svg";
import "./SideBar.scss";
import { ReactComponent as Logo } from "../../Assets/Svg/logo.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { closeSidebar, openSidebar } from "../../store/sidebarSlice";

export default function SideBar() {
  const dispatch = useAppDispatch();
  const { response, loading } = useAppSelector((state) => state.total);
  const { open } = useAppSelector((state) => state.sidebar);
  const [date, setDate] = useState("2020-04-01");
  useEffect(() => {
    dispatch({ type: "SET_TOTAL", payload: { date } });
  }, [date, dispatch]);

  return (
    <div className={"sideBar " + (open ? "open" : "close")}>
      <div className="sideBar__head">
        {open ? (
          <ArrowLeftSvg
            onClick={() => dispatch(closeSidebar())}
            className="sideBar__head__back"
          />
        ) : (
          <MenuSvg
            onClick={() => dispatch(openSidebar())}
            className="sideBar__head__menu"
          />
        )}
      </div>
      <div className="sideBar__main">
        <Logo></Logo>
        <div className={`sideBar__main__table ${loading}`}>
          <h3>World Covid Report</h3>
          <label htmlFor="date">
            <input
              type="date"
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </label>
          {loading === "idle" && response?.last_update === undefined && (
            <span className="sideBar__main__table__error">
              For the date selected no data available. Please select another
              date
            </span>
          )}
          <p>
            <span>Date:</span>
            <span>{response?.date}</span>
          </p>
          <p>
            <span>Last Updated:</span>
            <span>{response?.last_update}</span>
          </p>
          <p>
            <span>Confirmed:</span>
            <span>{response?.confirmed}</span>
          </p>
          <p>
            <span>Deaths:</span>
            <span>{response?.deaths}</span>
          </p>
          <p>
            <span>Recovered:</span>
            <span>{response?.recovered}</span>
          </p>
          <p>
            <span>Active:</span>
            <span>{response?.active}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
