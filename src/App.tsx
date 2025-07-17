import MovieCard from "./Card";
import ComboPage from "./ComboPage";
import { Button } from "./components/ui/button";

export default function App() {
  return <>
    <MovieCard orientation="horizontal" channel={true} imageUrls={["/channel.png", "/channel.png", "/channel.png", "/channel.png",]} />
    {/* <ChannelCard channel={["/channel.png", "/channel.png", "/channel.png", "/channel.png"]} /> */}
  </>;
}