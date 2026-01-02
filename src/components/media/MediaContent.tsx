import type { IMediaItem } from "../../media/media.types";
import Episodes from "./Episodes";
import MedialDetails from "./MediaDetails";
import Products from "./Products";

interface Props {
  mediaItem: IMediaItem
}

export default function MediaContent({ mediaItem }: Props) {
  return (
    <div>
      <div
        className="w-full bg-cover h-130 relative -mt-25 left-0 -z-1 object-cover"
        style={{ backgroundImage: `url(${mediaItem.backdrop})` }}
      >
        <div className="relative h-full z-1 p-10 flex items-end justify-between ">
          <MedialDetails mediaItem={mediaItem} />
          <Products />
        </div>
      </div>
      <Episodes mediaItem={mediaItem} />
    </div>
  );
}