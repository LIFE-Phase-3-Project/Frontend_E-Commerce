import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n/i18n'; 
import { ExploreLeft } from './ExploreLeft';
import { ExploreRight } from './ExploreRight';

export const FindJoy = () => {
  const { t, i18n } = useTranslation(); 

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, [i18n]);

  return (
    <div className="find-joy mt-20 z-10">
      <h2 className="text-4xl my-2 text-center text-green-700 dark:text-blue-medium">{t("findJoy")}</h2>

      <div className="explore mt-10 flex flex-col justify-around px-8 pt-10
                          sm:px-8 
                          md:flex-row md:py-24 md:px-16 
                          lg:p-24
                          text-green-medium
                          dark:text-blue-dark
                        ">

        <ExploreLeft />
        <ExploreRight />
               
      </div>
    </div>
  );
};
