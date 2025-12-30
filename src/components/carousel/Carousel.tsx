import { useState } from "react";
import { mediaData } from "../../media/media.data";
import { useCarouselStore } from "../../store/carousel.store";
import CarouselItem from "./carouselItem/CarouselItem";
import { motion } from "framer-motion";

const getCardIndex = (cardId: number) => {
  return mediaData.findIndex((media) => media.id === cardId)
}

export default function Carousel() {
  const {activeCardId, setActiveCardId} = useCarouselStore();
  const [rotateAngle, setRotateAngle] = useState(0);

  const updateActiveCard = (id: number) => {
    if (activeCardId === id) {
      return;
    }

    const oldIndex = getCardIndex(activeCardId);
    const newIndex = getCardIndex(id);

    const diff = newIndex - oldIndex;

    let newRotateAngle = (-1) * diff * 30;
    newRotateAngle = newRotateAngle === 330 ? -30 : newRotateAngle;
    newRotateAngle = newRotateAngle === -330 ? 30 : newRotateAngle;

    setRotateAngle((prev) => prev + newRotateAngle);

    setActiveCardId(id);
  };

  return (
    <motion.div 
      className="mt-24 relative mx-auto w-200 h-300"
      initial={{
        rotate: 0
      }}
      animate={rotateAngle ? {
        rotate: `${rotateAngle}deg`
      }: {}}
      transition={{
        type: "keyframes",
        duration: 0.6
      }}
    >
      {mediaData.map((media, index) => (
        <CarouselItem item={media} index={index} key={media.id} length={mediaData.length} updateActiveCard={updateActiveCard.bind(null, media.id)} />
      ))}
    </motion.div>
  );
}