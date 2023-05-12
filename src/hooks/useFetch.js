import { useEffect, useState } from "react";

export const useFetch = (pathUrl) => {
  const [data, myData] = useState([]);
  const base_url = "https://api.themoviedb.org/3";
  const url = `${base_url}${pathUrl}?api_key=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(url);
      const json = await response.json();
      myData(json.results);
    }
    fetchMovie();
  }, [url]);
  return { data };
};
