import { useSelector } from "react-redux";

// components
import Divider from "../../ui/Divider";
import Tabs from "../../ui/Tabs";
import MovieList from "../Browse/MovieList";
import Featurette from "./Featurette";

// constants
import { MOVIE_POSTER } from "../../constanst";

const SecondaryDetailsContainer = ({ type }) => {
  const videos = useSelector((store) => store.movies?.movieVideos);
  const recommendations = useSelector(
    (store) => store.movies?.movieRecommendations
  );

  const filterVideos = (type) => {
    const filtered = videos?.filter((video) => video.type == type);
    return filtered;
  };

  const filterFeature = filterVideos("Featurette");
  const filterTrailers = filterVideos("Trailer");
  const filterTeaser = filterVideos("Teaser");

  const tabs = [
    { type: "Featurette", obj: filterFeature, id: "featurette" },
    { type: "More Like This", obj: recommendations, id: "more" },
    { type: "Trailers", obj: filterTrailers, id: "trailers" },
    { type: "Teaser", obj: filterTeaser, id: "teaser" },
  ];

  const visibleTabs = tabs.filter((tab) => tab.obj?.length > 0);

  return (
    <div className="mt-14 text-white px-10">
      <Tabs tabs={visibleTabs} />
      <Divider />

      <div className="space-y-10 mt-6">
        {visibleTabs.map((tab) => (
          <div key={tab.id} id={tab.id}>

            {/* Conditional Layout */}
            {tab.type === "Featurette" ? (
              <Featurette feature={tab.obj} />
            ) : tab.type === "More Like This" ? (
              <MovieList
                movieList={tab.obj}
                title={tab.type}
                type={type}
                classname="pl-0"
              />
            ) : (
              <div className="flex flex-row gap-4 overflow-x-auto">
                {tab.obj.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] h-64 border bg-gray-800"
                  >
                    <p className="p-4">{item.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryDetailsContainer;


