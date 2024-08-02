import "../style/products.css";
import { SpecialOffers } from "../components/products/special-offers/SpecialOffers";
import { BrandAlbums } from "../components/products/brands-albums/BrandAlbums";
import { ProductSection } from "../components/products/product-section/ProductSection";
import { useGetWishListEntriesQuery } from "../redux/api/wishListApi";
import { motion } from "framer-motion";

export const Products = () => {
  const { data } = useGetWishListEntriesQuery();

  return (
    <motion.div 
        className="products mt-32"
        initial={{ width: "50%", opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{ width: "50%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <SpecialOffers />
        
        <BrandAlbums />
        <ProductSection />
    </motion.div>
  );
};
