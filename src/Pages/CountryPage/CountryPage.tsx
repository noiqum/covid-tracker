import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const CountryPage = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const { list } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();
  const [iso, setIso] = useState<null | string>(null);
  const [date, setDate] = useState("2020-04-01");

  useEffect(() => {
    if (list.length === 0) {
      dispatch({ type: "SET_LIST" });
    } else {
      const countryName = country?.toLowerCase().trim();
      console.log("country", countryName);
      const contIndex = list.findIndex(
        (country) =>
          country.name.toLowerCase().replace(/\s/g, "").trim() === countryName
      );
      if (contIndex === -1) {
        navigate("/not-found");
      } else {
        setIso(list[contIndex].iso);
      }
    }
  }, [list, dispatch, country, navigate]);

  useLayoutEffect(() => {
    if (iso) {
      dispatch({
        type: "SET_COUNTRY_DETAIL",
        payload: { iso, date },
      });
    }
  }, [iso, dispatch, date]);

  return <div className="CountryPage">CountryPage</div>;
};
