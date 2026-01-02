import { useState } from "react";
import type { IMediaItem } from "../../media/media.types";
import { motion } from "framer-motion";

interface Props {
  mediaItem: IMediaItem
}

export default function Episodes({ mediaItem }: Props) {
  const [currentSeason, setCurrentSeasons] = useState(mediaItem.seasons[0])

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10}}
      animate={{ opacity: 1, y: 0}}
    >
      <div className="p-10">
        <div className="flex gap-2 items-end mb-5">
          <h2 className="font-medium text-xl">Episodes</h2>
          <div className="pl-2 border-l border-l-black ">{currentSeason.title}</div>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {currentSeason.episodes.map((episode) => (
            <div key={episode.id}>
              <div className="w-full">
                <img className="rounded-xl" src={episode.poster} />
              </div>
              <div className="flex gap-2 items-center">
                <div>{episode.title}</div> •
                <div className="text-black/50">{episode.duration}m</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

}