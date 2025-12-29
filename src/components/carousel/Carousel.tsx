import { mediaData } from "../../media/media.data";
import CarouselItem from "./carouselItem/CarouselItem";

export default function Carousel() {

  return (
    <div>
      {mediaData.map((media, index) => (
        <CarouselItem item={media} index={index} key={media.id} />
      ))}
    </div>
  );
}