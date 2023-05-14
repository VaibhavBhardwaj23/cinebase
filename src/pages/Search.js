import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ pathUrl }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(pathUrl, queryTerm);

  return (
    <main className="main">
      <section className="text-4xl text-white m-5">
        <p>
          {movies
            ? `Results for "${queryTerm}"`
            : `No results for "${queryTerm}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies &&
            movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
        </div>
      </section>
    </main>
  );
};
