import { useParams } from "react-router-dom";

const Videos = () => {
  const { videoId } = useParams();
  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center p-20">
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
