import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Tembnail({ result }){
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(result.backdrop_path);
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition ease-in-out duration-500 transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        priority={true}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={1920}
        height={1080}
      />
      <div className=" p-2">
        {" "}
        <div className="truncate max-w-md">{result.overview}</div>
        <h2 className="transition-all duration-200 ease-in-out text-2xl text-white mt-2 group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 hover:opacity-100">
          {result.media_type && `${result.media_type} .`}{" "}
          {result.release_date || result.first_air_date} .{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Tembnail;
