import TembnailCarousel from "./TembnailCarousel";
import css from "../styles/scroll.module.css";

function CarouselBottom({ results3 }) {
  return (
    <div className="relative">
      <div className={css.makescroll2}>
        <div className="flex whitespace-nowrap scrollbar-hide">
          {results3.map((result) => (
            <TembnailCarousel key={result.id} result={result} />
          ))}
        </div>
      </div>

      <div className="costumegrad_position1 absolute top-0 bottom-0 right-0 bg-gradient-to-l from-[#06202A] h-80 w-1/12 z-50" />
      <div className="costumegrad_position2 absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#06202A] h-80 w-1/12 z-50" />
    </div>
  );
}

export default CarouselBottom;
