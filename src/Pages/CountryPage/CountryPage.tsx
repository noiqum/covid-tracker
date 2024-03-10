import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useLocation, redirect, useParams } from "react-router-dom";

export const CountryPage = () => {
  const { country } = useParams();
  const { list } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (list.length === 0) {
      dispatch({ type: "SET_LIST" });
    } else {
      console.log("params", country);
    }
  }, [list, dispatch, country]);

  return <div className="CountryPage">CountryPage</div>;
};
