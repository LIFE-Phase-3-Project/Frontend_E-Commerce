export const SpecialOffersImage = ({productsWithOffers, randomProductId}) => {
    return (
        <div
          className="special-offers-image w-5/12 bg-center bg-cover h-full"
          style={{
            backgroundImage: `url('${
              productsWithOffers &&
              productsWithOffers[randomProductId]?.firstImage
              // (
                // productsWithOffers[randomProductId]?.image 
                // && productsWithOffers[randomProductId]?.image.length > 0 
                // && productsWithOffers[randomProductId]?.image[0]
              // )
            }')`,
          }}
        ></div>
    )
}