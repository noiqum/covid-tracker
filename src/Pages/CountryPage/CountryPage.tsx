import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "../../Components/Navigation/Navigation";
import { DataBox } from "../../Components/DataBox/DataBox";
import "./CountryPage.scss";

export const CountryPage = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const { list } = useAppSelector((state) => state.list);
  const { countryDetailSum } = useAppSelector((state) => state.country);
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

  return (
    <div className="CountryPage">
      <Navigation type="side" />
      <main>
        <section className="CountryPage__info-boxes">
          <DataBox title="Active" data={countryDetailSum?.active}></DataBox>
          <DataBox
            title="Confirmed"
            data={countryDetailSum?.confirmed}
          ></DataBox>
          <DataBox title="Deaths" data={countryDetailSum?.deaths}></DataBox>
          <DataBox
            title="Recovered"
            data={countryDetailSum?.recovered}
          ></DataBox>
        </section>
      </main>
    </div>
  );
};
