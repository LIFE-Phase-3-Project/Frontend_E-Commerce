import "../style/products.css";
import { SpecialOffers } from "../components/products/special-offers/SpecialOffers";
import { BrandAlbums } from "../components/products/brands-albums/BrandAlbums";
import { ProductSection } from "../components/products/product-section/ProductSection";
import { useParams } from "react-router-dom";

export const ProductsSubCategory = () => {
  const route = useParams();

  return (
    <div className="products products-category-page mt-32">
        <SpecialOffers subCategory={route.subCategory}/>
        <BrandAlbums />
        <ProductSection subCategory={route.subCategory}/>
    </div>
  );
};
