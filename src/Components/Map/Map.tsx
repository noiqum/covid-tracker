import { useCallback, useEffect } from "react";
import { countryList } from "../../Data/Data";
import { Country } from "../Country/Country";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  setTooltipPosition,
  setTooltipDisplay,
  setTooltipName,
} from "../../store/tooltipSlice";

export const Map = () => {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.tooltip);
  const mouseTracker = useCallback(
    (event: MouseEvent) => {
      if (
        event.target instanceof SVGPathElement &&
        event.target.parentElement?.id === "map"
      ) {
        if (name !== event.target.attributes.getNamedItem("name")?.value) {
          const { x, y } = event.target.getBoundingClientRect();
          dispatch(setTooltipDisplay(true));
          dispatch(
            setTooltipName(
              event.target.attributes.getNamedItem("name")?.value || null
            )
          );
          dispatch(
            setTooltipPosition({
              x: x + 10,
              y: y - 10,
            })
          );
        }
      } else {
        dispatch(setTooltipDisplay(false));
      }
    },
    [dispatch, name]
  );

  useEffect(() => {
    document.addEventListener("mousemove", mouseTracker);
    return () => document.removeEventListener("mousemove", mouseTracker);
  }, [mouseTracker]);
  return (
    <div className="map">
      <svg
        baseProfile="tiny"
        fill="#ececec"
        height="auto"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".2"
        version="1.2"
        viewBox="0 0 2000 857"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        id="map"
      >
        {countryList.map((country, index) => {
          return (
            <Country
              key={country.name + index}
              name={country.name}
              path={country.path}
            />
          );
        })}
      </svg>
    </div>
  );
};
