import { FilePlay, Star } from "lucide-react";
import { motion } from "framer-motion"; ``
import type { IMediaItem } from "../../../media/media.types";
import { useCarouselStore } from "../../../store/carousel.store";
import { twMerge } from "tailwind-merge";

interface Props {
  item: IMediaItem,
  index: number,
  length: number,
}

export default function CarouselItem({ item, index, length }: Props) {
  const { activeCardId, setActiveCardId } = useCarouselStore();

  const isActive = activeCardId === item.id;

  const angleStep = 360 / length;
  const angle = -90 + angleStep * index;
  const radius = 430;

  return (
    <div style={{position: "absolute", left: "50%", top: "100%", transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`, zIndex: isActive ? 1 : 0}}>
      <motion.button
        className={twMerge("cursor-pointer", !isActive && "grayscale-100 contrast-75")}
        initial={{ zIndex: 0}}
        animate={{
          scale: isActive ? 1.1 : 1,
          zIndex: isActive ? 1 : 0
        }}
        transition={{ type: "keyframes", stiffness: 230, damping: 32 }}
        onClick={() => setActiveCardId(item.id)}
      >
        <div
          className="h-100 w-70 bg-cover p-3 pb-5   rounded-xl"
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
                <p>{item.category}</p>
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
    </div>
  );
}