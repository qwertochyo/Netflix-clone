import type { IMediaItem } from "../../media/media.types";
import { motion } from "framer-motion";

interface Props {
  mediaItem: IMediaItem
}

export default function MedialDetails({ mediaItem }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-4 text-white justify-between"
    >
      <div className=" flex gap-2 text-sm font-medium">
        {mediaItem.genres.map((genre) => (
          <span className="p-3 bg-white/40 rounded-md" key={mediaItem.id}>{genre}</span>
        ))}
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className=" text-5xl font-bold"
      >
        {mediaItem.title}</motion.h1>
      <motion.div 
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex items-center gap-10"
      >
        <div className="text-blue-600 font-semibold text-3xl">FEFUlix</div>
        <div className="font-medium space-x-2">
          <div className="bg-secondary text-black text-sm p-1 rounded-sm inline">iMDb</div>
          <div className="inline">{mediaItem.rating.toFixed(1)}/10</div>
        </div>
      </motion.div>
    </motion.div>
  );
}