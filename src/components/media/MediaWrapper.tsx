import { useParams } from "react-router";
import { mediaData } from "../../media/media.data";
import MediaContent from "./MediaContent";

export default function MediaWrapper() {

  const { slug } = useParams<{ slug: string }>();

  const mediaItem = mediaData.find((mediaItem => mediaItem.slug === slug))

  if (!mediaItem) {
    return (
      <div>Не найдено</div>
    );
  }

  return (
    <MediaContent mediaItem={mediaItem}/>
  );
}