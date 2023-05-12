import { Routes, Route } from "react-router-dom";
import { MovieList, PageNotFound, MovieDetail, Search } from "../pages";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList pathUrl="/movie/now_playing" />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route
          path="movies/popular"
          element={<MovieList pathUrl="/movie/popular" />}
        />
        <Route
          path="movies/top"
          element={<MovieList pathUrl="/movie/top_rated" />}
        />
        <Route
          path="movies/upcoming"
          element={<MovieList pathUrl="/movie/upcoming" />}
        />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
