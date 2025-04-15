import { motion } from "framer-motion";

interface MenuCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const MenuCard = ({ title, description, imageUrl }: MenuCardProps) => {
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default MenuCard;
