import React, { useState } from "react";
import "./countryDetails.scss";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { AuthContext } from "../../ContetxtProvider/AuthProvider";
import { useContext } from "react";

export const CountryDetails = () => {
  const context = useContext(AuthContext);
  console.log(context.user);
  const [country, setCountry] = useState([]);
  const [code, setCode] = useState();
  const [countryName, setCountryName] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  const handleClickCode = (element) => {
    setCode(element);
  };

  useEffect(() => {
    const countriesApi = `https://restcountries.com/v3.1/name/${params.countryName}`;
    const callAPI = async () => {
      if (params.countryName) {
        await axios
          .get(countriesApi)
          .then((res) => {
            setCountry(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }
    };
    callAPI();
  }, [params.countryName]);

  useEffect(() => {
    // console.log("code", code);
    const getCode = `https://restcountries.com/v3.1/alpha?codes=${code}`;
    const getAPICode = async () => {
      if (code && code !== undefined) {
        await axios
          .get(getCode)
          .then((res) => {
            // console.log("res.data", res.data);
            if (res.data.length > 0) {
              const commonName = res.data.map((item) => {
                return item.name.common;
              });
              setCountryName(commonName);
            }
          })
          .catch((err) => console.log(err));
      }
    };
    getAPICode();
  }, [code, countryName]);

  // const getBorderCountries = (item) => {
  //   let result = "";
  //   if (item.borders) {
  //     item.borders.forEach((element) => {
  //       if (result !== "") {
  //         result = result + ", " + element;
  //       } else {
  //         result = result + element;
  //       }
  //     });
  //     return result;
  //   }
  // };
  return (
    <div className="detail">
      <button onClick={() => navigate(-1)}>Go back</button>
      {loading === true && <Loading />}
      {country.map((item, index) => {
        return (
          <div className="countryDetail" key={index}>
            <div className="image">
              <img src={item.flags.png} alt="" />
            </div>
            <div className="info">
              <h2 className="headingName">{item.name.common}</h2>
              <ul>
                <li>Native Name</li>
                <li>:</li>
                <li>{item.name.common}</li>
              </ul>
              <ul>
                <li>Official</li>
                <li>:</li>
                <li>{item.name.official}</li>
              </ul>
              <ul>
                <li>Population</li>
                <li>:</li>
                <li>{Intl.NumberFormat().format(item.population)}</li>
              </ul>
              <ul>
                <li>Region</li>
                <li>:</li>
                <li>{item.region}</li>
              </ul>
              <ul>
                <li>Sub Region</li>
                <li>:</li>
                <li>{item.subregion}</li>
              </ul>
              <ul>
                <li>Capital</li>
                <li>:</li>
                <li>{item.capital}</li>
              </ul>
              <ul>
                <li>Top Level Domain</li>
                <li>:</li>
                <li>{item.tld}</li>
              </ul>
              <ul>
                <li>Currencies</li>
                <li>:</li>
                <li>{item.currencies.name}</li>
              </ul>
              <ul>
                <li>Language</li>
                <li>:</li>
                {/* <li>{item.languages}</li> */}
              </ul>
              <ul>
                <li>BorderCountries</li>
                <li>:</li>
                <li>
                  {item.borders &&
                    item.borders.map((element, index) => {
                      return (
                        <Link to={`/country/${countryName}`} key={index}>
                          <button
                            style={{ marginRight: "5px" }}
                            onClick={() => handleClickCode(element)}
                          >
                            {element}
                          </button>
                        </Link>
                      );
                    })}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
