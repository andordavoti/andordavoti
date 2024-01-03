import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
}

const StoreIcon: FC<Props> = ({ src, alt }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <img src={src} alt={alt} style={{ width: 250, margin: 10 }} />
    </motion.div>
  );
};

export default StoreIcon;
