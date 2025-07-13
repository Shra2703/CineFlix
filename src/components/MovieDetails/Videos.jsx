import { useParams } from "react-router-dom";


const Videos = () => {

  const {videoId } = useParams();

  return (
    <div className="h-screen w-full bg-black text-white flex items-center justify-center p-20 max-md:p-10 max-sm:pt-15">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full"
        title="Video Player"
      />
    </div>
  );
};

export default Videos;
