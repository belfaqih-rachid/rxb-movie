import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const TembnailCarousel = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="cursor-pointer hover:z-50">
      <div className="h-30 w-80 px-1">
        <Image
          className="object-contain rounded-md"
          layout="responsive"
          priority={true}
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          width={1920}
          height={1080}
        />
      </div>

      <div className="">
        <div className="opacity-0 w-1">{result.overview}</div>
        <h2 className="opacity-0  transition-all duration-200 ease-in-out  text-white mb-2 ">
          {result.title || result.original_name}
        </h2>
      </div>
    </div>
  );
});

export default TembnailCarousel;
