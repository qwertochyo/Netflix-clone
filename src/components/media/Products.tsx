import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/10 p-3 rounded-2xl"
    >
      <div className="relative w-60 mb-7">
        <img className="w-full rounded-2xl z-3 relative" src="/products/product.jpg" />
        <motion.div 
          initial={{ top: 0}}
          animate={{ top: -24 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute w-full h-full bg-white/95 rounded-2xl left-1 scale-90 z-2"
        ></motion.div>
        <motion.div 
          initial={{ top: 0}}
          animate={{ top: -46 }}
          transition={{ duration: 0.8, delay: 0.3}}
          className="absolute w-full h-full bg-white/90 rounded-2xl left-2 scale-80 z-1"
        ></motion.div>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-secondary font-semibold">
          Shop now
        </button>
        <ChevronRight className="text-secondary" />
      </div>
    </motion.div>
  );
}