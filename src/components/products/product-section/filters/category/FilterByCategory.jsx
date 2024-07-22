import { useState } from "react";
import { useGetAllCategoriesQuery } from "../../../../../redux/api/categoriesApi";
import { FiltersDropdown } from "../general/FiltersDropDown";
import { CategoryList } from "../general/CategoryList";
import { ProductsByCategories } from "./ProductsByCategories";
import { useSelector } from "react-redux";

export const FilterByCategory = ({ category: categoryId, t }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const filters = useSelector((state) => state.categories.filters);
    const { data, isLoading } = useGetAllCategoriesQuery({filters});

    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);

    if(isLoading) return <h1>loading</h1>

    return (
        <div className="filter-by-category">
            <FiltersDropdown
                    title={categoryId ? data?.title : t("categories")}
                    isActive={isDropdownActive}
                    toggleDropdown={toggleDropdown}
                >
                 <CategoryList
                        items={data || []}
                        renderItem={(category) => (
                            <ProductsByCategories
                                category={category}
                            />
                        )}/>
            </FiltersDropdown>
        </div>
    )
}
