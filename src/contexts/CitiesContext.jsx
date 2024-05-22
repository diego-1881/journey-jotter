import { createContext, useState, useEffect } from "react";

const BASE_URL = "http://localhost:9000";
const CitiesContext = createContext();

import PropTypes from "prop-types";
CitiesProvider.propTypes = {
  children: PropTypes.node,
};

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("Failed to fetch cities");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("Failed to fetch cities");
    } finally {
      setIsLoading(false);
    }
  }

  return <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>{children}</CitiesContext.Provider>;
}

export { CitiesContext, CitiesProvider };
