import { useState } from "react";
import { useGetAllBrandsQuery } from "../../../../../redux/api/brandsApi";
import { FiltersDropdown } from "../general/FiltersDropDown";
import { CategoryList } from "../general/CategoryList";
import { useSelector } from "react-redux";
import { Brands } from "./Brands";

export const FilterByBrands = ({ t }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const filters = useSelector((state) => state.filters.filters);
    const { data, isLoading } = useGetAllBrandsQuery({filters});

    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);

    if(isLoading) return <h1>loading</h1>

    return (
        <div className="filter-by-brands">
            <FiltersDropdown
                    title={t("brands")}
                    isActive={isDropdownActive}
                    toggleDropdown={toggleDropdown}
                >
                 <CategoryList
                        items={data || []}
                        renderItem={(brand, key) => (
                            <Brands
                                key={key}
                                brand={brand}
                            />
                        )}/>
            </FiltersDropdown>
        </div>
    )
}
