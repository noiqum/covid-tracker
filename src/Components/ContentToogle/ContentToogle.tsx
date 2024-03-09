import { updateContent } from "../../store/contentSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ListIcon } from "./ListIcon";
import { MapIcon } from "./MapIcon";
import "./ContentToogle.scss";

export const ContentToogle = () => {
  const { displayContent } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();
  return (
    <div className="content__toogle">
      <label
        className={`content__toogle__label--map ${
          displayContent === "map" ? "active" : ""
        }`}
        htmlFor="map"
      >
        <MapIcon></MapIcon>
        <span>Map</span>
        <input
          checked={displayContent === "map"}
          type="radio"
          name="content"
          id="map"
          onChange={() => dispatch(updateContent("map"))}
        />
      </label>
      <label
        className={`content__toogle__label--list ${
          displayContent === "list" ? "active" : ""
        }`}
        htmlFor="list"
      >
        <ListIcon></ListIcon>
        <span>List</span>
        <input
          checked={displayContent === "list"}
          type="radio"
          name="content"
          id="list"
          onChange={() => dispatch(updateContent("list"))}
        />
      </label>
    </div>
  );
};
