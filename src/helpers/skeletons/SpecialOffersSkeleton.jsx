export const SpecialOffersSkeleton = () => {
  return (
      <div className="special-offers-skeleton border p-4 rounded shadow-2xl lg:max-w-7xl m-auto h-80 flex items-center justify-between bg-gray-100 dark:bg-gray-800 animate-pulse
      w-11/12 md:w-10/12 lg:max-w-7xl lg:w-7/12">
          <div className="special-offers-content-skeleton w-7/12 flex flex-col items-center">
              <div className="product-title-skeleton h-8 bg-gray-300 dark:bg-gray-700 w-8/12 mb-4 rounded"></div>
              <div className="offer-time-skeleton h-6 bg-gray-300 dark:bg-gray-700 w-6/12 mb-4 rounded"></div>
              <div className="explore-now-skeleton h-10 bg-gray-300 dark:bg-gray-700 w-5/12 rounded"></div>
          </div>
          <div className="special-offers-image-skeleton w-5/12 bg-gray-300 dark:bg-gray-700 h-full flex justify-center items-center">
              <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
              >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
          </div>
      </div>
  );
};
