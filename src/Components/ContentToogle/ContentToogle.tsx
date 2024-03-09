import { updateContent } from "../../store/contentSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const ContentToogle = () => {
  const { displayContent } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();
  return (
    <div className="content__toogle">
      <label
        onChange={() => dispatch(updateContent("map"))}
        className="content__toogle__label--map"
        htmlFor="content"
      >
        <input
          checked={displayContent === "map"}
          type="radio"
          name="map"
          id="map"
        />
      </label>
      <label
        onChange={() => dispatch(updateContent("list"))}
        className="content__toogle__label--list"
        htmlFor="content"
      >
        <input
          checked={displayContent === "list"}
          type="radio"
          name="list"
          id="list"
        />
      </label>
    </div>
  );
};
