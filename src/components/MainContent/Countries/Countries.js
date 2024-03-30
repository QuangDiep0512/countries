import React, { useEffect, useState } from "react";
import "../../../scss/App.scss";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { Paination } from "../pagination/Pagination";
import countriesApi from "../../../api/countriesApi";
const Countries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const callAPI = async () => {
      try {
        let response = "";
        if (params.regionName) {
          response = await countriesApi.getRegionName(
            params.regionName.toLocaleLowerCase()
          );
        } else if (params.name) {
          response = await countriesApi.getCountryName(params.name);
        } else {
          response = await countriesApi.getAll();
        }
        setData(response);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    callAPI();
  }, [params.name, params.regionName]);
  return (
    <div className="countries-content">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <Paination />
          <div className="countries">
            {data.map((item, index) => {
              return (
                <div className="countries-cart" key={index}>
                  <Link to={`/country/${item.name.common}`}>
                    <div className="countries-cart--img">
                      <img src={item.flags.png} alt="" />
                    </div>
                    <div className="countries-cart--information">
                      <h3 className="contries-name">{item.name.common}</h3>
                      <p className="population">
                        <span>Population:</span>{" "}
                        {Intl.NumberFormat().format(item.population)}
                      </p>
                      <p className="region">
                        <span>Region:</span> {item.region}
                      </p>
                      <p className="capital">
                        <span>Capital:</span> {item.capital}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Countries;
