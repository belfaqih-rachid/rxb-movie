import Tembnail from "./Tembnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="mb-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
      {results.map((result) => (
        <Tembnail key={result.id} result={result}/>
      ))}
    </FlipMove>
  );
}

export default Results;
