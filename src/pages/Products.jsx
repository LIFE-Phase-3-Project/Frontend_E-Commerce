import "../style/products.css";
import { SpecialOffers } from "../components/products/special-offers/SpecialOffers";
import { BrandAlbums } from "../components/products/brands-albums/BrandAlbums";
import { ProductSection } from "../components/products/product-section/ProductSection";
import { useGetWishListEntriesQuery } from "../redux/api/wishListApi";

export const Products = () => {
  const { data } = useGetWishListEntriesQuery();

  console.log("data")
  console.log(data)
  return (
    <div className="products mt-32">
      <SpecialOffers />
        {/* 
        <BrandAlbums /> */}
        <ProductSection />
    </div>
  );
};
