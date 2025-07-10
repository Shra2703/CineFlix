import { useSelector } from "react-redux";

// components
import { FeaturetteCard } from "./Featurette";

const Extras = ({ tab }) => {
  const details = useSelector((store) => store.movies?.movieDetails);
  if (!details) return;
  const { backdrop_path } = details || {};
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{tab.type}</h2>
        <div className="flex flex-row gap-4 overflow-x-auto scroll-smooth slider">
          {tab.obj.map((item, index) => (
            <FeaturetteCard
              item={item}
              imageUrl={backdrop_path}
              classname="flex-col gap-1.5 h-full !w-1/4 flex-shrink-0"
              imageClass="w-full"
              paraClass="w-full"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Extras;
