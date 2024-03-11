import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./SearchBar.scss";
import { SearchIcon } from "./SearchIcon";
import { setOpen } from "../../store/listSlice";
import { List } from "../List/List";

export const SearchBar = () => {
  const { list, loading, open } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (loading === false && list.length === 0) {
      dispatch({ type: "SET_LIST" });
    }
  }, [list, loading, dispatch]);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      dispatch(setOpen(true));
    }
    if (searchQuery.length === 0) {
      dispatch(setOpen(false));
    }
  }, [searchQuery, dispatch]);

  return (
    <div className="SearchBar">
      <SearchIcon />
      <input
        className="SearchBar__input"
        type="text"
        placeholder="Search for a country"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      {open && <List regions={list} open={open} searchParam={searchQuery} />}
    </div>
  );
};
