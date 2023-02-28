import Hero from "@/components/Hero";
import PopularMovie from "@/components/PopularMovie";
import axios from "axios";
import { server } from "../config/index";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className="bg-gray-700">
      <Hero />
      <PopularMovie movies={movies.results} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const movies = response.data;
  return {
    props: { movies },
  };
}
