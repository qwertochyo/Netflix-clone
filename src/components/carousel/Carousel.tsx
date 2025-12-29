import { mediaData } from "../../media/media.data";
import CarouselItem from "./carouselItem/CarouselItem";

export default function Carousel() {

  return (
    <div className="mt-14 relative mx-auto">
      {mediaData.map((media, index) => (
        <CarouselItem item={media} index={index} key={media.id} length={mediaData.length} />
      ))}
    </div>
  );
}