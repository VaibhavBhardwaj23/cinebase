import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ pathUrl }) => {
  const { data: movies } = useFetch(pathUrl);

  return (
    <main className="main">
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
