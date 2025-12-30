import { motion, AnimatePresence } from "framer-motion";
import type { IMediaItem } from "../../../media/media.types";
import { useCarouselStore } from "../../../store/carousel.store";
import { twMerge } from "tailwind-merge";
import CarouselItemDetails from "./CarouselItemDetails";

interface Props {
  item: IMediaItem,
  index: number,
  length: number,
  updateActiveCard: () => void
}

export default function CarouselItem({ item, index, length, updateActiveCard }: Props) {
  const { activeCardId, setActiveCardId } = useCarouselStore();

  const isActive = activeCardId === item.id;

  const angleStep = 360 / length;
  const angle = -90 + angleStep * index;
  const radius = 430;

  return (
    <div style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -${radius}px)`, zIndex: isActive ? 1 : 0 }}>
      <motion.button
        className={twMerge("cursor-pointer", !isActive && "grayscale-100 contrast-75")}
        initial={{ zIndex: 0 }}
        animate={{
          scale: isActive ? 1.1 : 1,
          zIndex: isActive ? 1 : 0
        }}
        transition={{ type: "keyframes", stiffness: 230, damping: 32 }}
        onClick={updateActiveCard}
      >
        <div
          className="h-100 w-70 bg-cover p-3 pb-5   rounded-xl"
          style={{ backgroundImage: `url(${item.poster})` }}
        >
          <AnimatePresence>
            { isActive && <CarouselItemDetails item={item} /> }
          </AnimatePresence>
        </div>
      </motion.button>
    </div>
  );
}