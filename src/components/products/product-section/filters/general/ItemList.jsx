import { motion } from "framer-motion";

export const ItemList = ({ items, renderItem }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
        <ul className="filters-by p-3 border-b-2 border-green-extra-light dark:border-gray-600">
            {items.map((item, key) => renderItem(item, key))}
        </ul>
        </motion.div>
    );
}
