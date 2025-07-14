import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import Input from "../ui/Input";

// hook
import useSearch from "../utils/hooks/RTK/useSearch";
import MovieCard from "../components/Browse/MovieCard";

const MovieSearch = () => {
  const [search, setSearch] = useState("");
  useSearch(search);
  const searchResults = useSelector((store) => store.search?.searchResults);

  return (
    <div className="w-full min-h-screen bg-[#0F1016] font-roboto transition-all duration-200">
      <div className="max-w-6xl mx-auto flex flex-col pt-24 gap-6 max-lg:max-w-2xl  max-md:max-w-xl max-sm:mx-12">

        <MovieSearchBar search={search} setSearch={setSearch} />
        <div className=" w-full flex flex-wrap gap-6 justify-start mb-12 max-lg:justify-evenly">
          {searchResults.length === 0 ? (
            <h1 className="text-white w-full h-full relative font-consent text-6xl flex items-center justify-center pt-36 max-md:text-2xl">
              😲 No Search Found!!!
            </h1>
          ) : (
            searchResults?.map(
              (result, index) =>
                result?.poster_path &&
                result?.backdrop_path && (
                  <Link key={index} to={`/browse/details-movies/${result.id}`}>
                    <MovieCard
                      movie={result}
                      index={index}
                      length={searchResults?.length}
                    />
                  </Link>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;

const MovieSearchBar = ({ search, setSearch }) => {
  return (
    <div className="">
      <div className="w-full h-auto bg-black/80 mx-auto px-5 py-3 relative rounded-2xl max-sm:px-3 max-sm:py-0 max-sm:rounded">
        <Search
          className="text-white absolute left-0 top-7 font-bold mx-4 max-sm:top-4 max-sm:mx-2"
          size={20}
        />
        <Input
          placeholder="Movies, Shows and More"
          classname="w-full border-0 text-xl ml-2 text-white/80 max-sm:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
