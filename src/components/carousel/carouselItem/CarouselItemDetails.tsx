import { motion } from "framer-motion";
import { Star, TvMinimal } from "lucide-react";
import type { IMediaItem } from "../../../media/media.types";

interface Props {
  item: IMediaItem
}

const animation = {
  initial: { opacity: 1, scale: 0 },
  animate: { opacity: 1, scale: 1},
  exit: { opacity: 1, scale: 0 },
  transition: { duration: 0.6 }
}

export default function CarouselItemDetails({ item }: Props) {
  return (
    <div 
      className="flex flex-col justify-between h-full text-sm"
    >
      <div className="flex justify-between">
        <motion.div  className="flex items-center gap-1.5 bg-secondary px-2 py-1 rounded-sm" {...animation}>
          <Star size={18} />
          {item.rating}
        </motion.div >
        <motion.div  className="flex text-white bg-black/80 items-center gap-1 p-1 rounded-sm" {...animation}>
          <TvMinimal size={20} />
          {item.category}
        </motion.div >
      </div>
      <motion.div  className="flex flex-col items-center text-black" {...animation}>
        <div className="text-2xl bg-white/85 p-2 font-medium rounded-t-sm">
          <h3>{item.title}</h3>
        </div>
        <div className="flex gap-3 text-black/70 bg-white/85 p-1 rounded-sm">
          <span>{item.year}</span> •
          {item.seasons?.length && <span>{item.seasons?.length} Seasons</span>} •
          <span>All episodes</span>
        </div>
      </motion.div >
    </div>
  );
}