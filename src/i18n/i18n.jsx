import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {homeHeadEn, homeHeadSq} from "./home/home-head-tr";
import {findJoyEn, findJoySq} from "./home/find-joy";
import {homeScrollEn, homeScrollSq} from "./home/home-scroll";
import {productsSectionEn, productsSectionSq} from "./products/products-section";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',

    resources: {
      en: {
        translation: {
          ...homeHeadEn,
          ...findJoyEn,
          ...homeScrollEn,
          ...productsSectionEn,

          search: "Search",
          seeMore: "See more",
          exploreNow:"Explore now",
          rating: "Rating",
          filterBy: "Filter By",
          categories: "Categories"
        },
    },
    sq: {
        translation: {
            ...homeHeadSq,
            ...findJoySq,
            ...homeScrollSq,
            ...productsSectionSq,

            search: "Kërkoni",
            seeMore: "Shiko më shumë",
            exploreNow:"Eksploroni tani",
            rating: "Vlerësimi",
            filterBy: "Filtro sipas",
            categories: "Kategoritë"
        },
      }
    }
  });

export default i18n;
