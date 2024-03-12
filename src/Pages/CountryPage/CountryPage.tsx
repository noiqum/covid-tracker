import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "../../Components/Navigation/Navigation";
import { DataBox } from "../../Components/DataBox/DataBox";
import "./CountryPage.scss";
import { news } from "../../Data/news";
import { Article } from "../../Components/Article/Article";

export const CountryPage = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const { list } = useAppSelector((state) => state.list);
  const { countryDetailSum, loading } = useAppSelector(
    (state) => state.country
  );
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
        <section className="CountryPage__date">
          <label htmlFor="date">
            Date
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <span>Last Update: {countryDetailSum?.last_update}</span>
        </section>
        <section className="CountryPage__info-boxes">
          <DataBox
            title="Active"
            data={countryDetailSum?.active}
            loading={loading}
            diff={countryDetailSum?.active_diff}
          ></DataBox>
          <DataBox
            title="Confirmed"
            data={countryDetailSum?.confirmed}
            diff={countryDetailSum?.confirmed_diff}
            loading={loading}
          ></DataBox>
          <DataBox
            title="Deaths"
            data={countryDetailSum?.deaths}
            diff={countryDetailSum?.deaths_diff}
            loading={loading}
          ></DataBox>
          <DataBox
            title="Recovered"
            data={countryDetailSum?.recovered}
            diff={countryDetailSum?.recovered_diff}
            loading={loading}
          ></DataBox>
        </section>
        <aside className="CountryPage__news">
          <h2>Latest News</h2>
          <div className="CountryPage__news__column">
            {news.news.map((article) => {
              return (
                <Article
                  title={article.title}
                  description={article.excerpt}
                  key={article.title}
                  path={article.webUrl}
                  date={article.publishedDateTime}
                  image={
                    article.images
                      ? article.images[0].url
                      : "https://s3.reutersmedia.net/resources/r/?m=02&d=20210222&t=2&i=1552406671&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPEH1L0EJ"
                  }
                  source={article.provider?.name || "Reuters"}
                />
              );
            })}
          </div>
        </aside>
      </main>
    </div>
  );
};
