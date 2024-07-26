import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FiltersDropdown } from "../general/FiltersDropDown";
import { Colors } from "./Colors";
import { ItemList } from "../general/ItemList";

export const Color = () => {
    const colors = useMemo(() => [
      {
        _id: 9001,
        title: "Green",
        base: "#22c55e",
      },
      {
        _id: 9002,
        title: "Gray",
        base: "#a3a3a3",
      },
      {
        _id: 9003,
        title: "Red",
        base: "#dc2626",
      },
      {
        _id: 9004,
        title: "Yellow",
        base: "#f59e0b",
      },
      {
        _id: 9005,
        title: "Blue",
        base: "#3b82f6",
      },
    ],[]);

    const { t, i18n } = useTranslation();
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    
    useEffect(() => {
        i18n.changeLanguage(navigator.language);
    }, [i18n]);

    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);
    
  
    return (
      <div className="color-filter">
            <FiltersDropdown
                title={t("color")}
                isActive={isDropdownActive}
                toggleDropdown={toggleDropdown}
              >

          <ItemList
              items={colors || []}
              renderItem={(color, key) => (
                  <Colors
                      key={key}
                      color={color}
                  />
              )}/>
        </FiltersDropdown>
    </div>
  );
};