import { FilePlay, Star } from "lucide-react";
import { motion } from "framer-motion"; ``
import type { IMediaItem } from "../../../media/media.types";
import { mediaData } from "../../../media/media.data";
import { useGetStyleRotation } from "../useGetStyleRotation";

interface Props {
  item: IMediaItem,
  index: number
}

export default function CarouselItem({ item, index }: Props) {
  const { rotate, translateY } = useGetStyleRotation(index, mediaData.length);

  const initialAnimation = {
    scale: 1,
    zIndex: 0,
    y: translateY,
    rotate,
  }

  return (
    <motion.button
      initial={{ scale: 1, zIndex: 0, y: 0 }}
      animate={initialAnimation}
      transition={{ type: "keyframes", stiffness: 230, damping: 32 }}
    >
      <div
        className="h-120 w-80 bg-cover p-3 pb-5   rounded-xl"
        style={{ backgroundImage: `url(${item.poster})` }}
      >
        <div className="flex flex-col justify-between h-full text-sm">
          <div className="flex justify-between">
            <div className="flex items-center gap-1.5 bg-secondary px-2 py-1 rounded-sm">
              <Star size={18} />
              <p>{item.rating}</p>
            </div>
            <div className="flex text-white bg-black/80 items-center gap-1 p-1 rounded-sm">
              <FilePlay size={20} />
              <p>TV Show</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-black">
            <div className="text-2xl bg-white/85 p-2 font-medium rounded-t-sm">
              <h3>{item.title}</h3>
            </div>
            <div className="flex gap-3.5 justify-center text-black/70 bg-white/85 p-1 rounded-sm">
              <p>{item.year}</p>
              <p>•</p>
              <p>5 Seasons</p>
              <p>•</p>
              <p>All episodes</p>
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}