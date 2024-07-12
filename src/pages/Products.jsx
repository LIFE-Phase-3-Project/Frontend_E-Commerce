import "../style/products.css";
import { SpecialOffers } from "../components/products/special-offers/SpecialOffers";
import { BrandAlbums } from "../components/products/brands-albums/BrandAlbums";
import { ProductSection } from "../components/products/product-section/ProductSection";

export const Products = () => {  
  return (
    <div className="products mt-32">
        <SpecialOffers />
        <BrandAlbums />
        <ProductSection />
    </div>
  );
};
