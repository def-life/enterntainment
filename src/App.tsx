import MovieCard from "./Card";
import ComboPage from "./ComboPage";
import { Button } from "./components/ui/button";

export default function App() {
  return <>
    <div className="flex  gap-[15px]">
      {/* <MovieCard orientation="horizontal" channel={true} imageUrls={["/movie.png", "/movie.png", "/movie.png", "/movie.png",]} /> */}
      <MovieCard orientation="horizontal" channel={false} imageUrls={["/movie.png", "/movie.png", "/movie.png", "/movie.png",]} />

      {/* <MovieCard orientation="vertical" imageUrls={["/movie.png"]} channel={false} />
      <MovieCard orientation="horizontal" imageUrls={["/movie.png"]} channel={false} />
      <MovieCard orientation="horizontal" imageUrls={["/movie.png"]} channel={true} />


      <MovieCard orientation="horizontal" imageUrls={["/movie.png"]} channel={true} logoUrl={"/logo.png"} /> */}
    </div>
    {/* <div className="flex  gap-[15px]">
      <Button variant="outlined" >Hello wolrd</Button>
      <Button variant="contained" >Hello wolrd</Button>
      <Button  variant="text" >Hello wolrd</Button>
    </div> */}

  </>;
}