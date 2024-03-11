import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";

export const CountryPage = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const { list } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();
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
      }
    }
  }, [list, dispatch, country, navigate]);
  if (!country) {
    return <div>CountryPage</div>;
  }

  return <div className="CountryPage">CountryPage</div>;
};
