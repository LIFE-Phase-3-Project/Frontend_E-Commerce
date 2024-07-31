import { useEffect, useState } from "react";
import { useGetCategoryByIdQuery } from "../../../../../redux/api/categoriesApi";
import { ProductsBySubCategories } from "./ProductsBySubCategories";
import { FiltersDropdown } from "../general/FiltersDropDown";
import { ItemList } from "../general/ItemList";
import { useSelector } from "react-redux";

export const FilterBySubCategory = ({ category: categoryId, t }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [category, setCategory] = useState({})

    
    const filters = useSelector((state) => state.filters.filters);
    const { data } = useGetCategoryByIdQuery(categoryId, {filters});

    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);


    useEffect(() => {
        data && setCategory(data[0])
    }, [category, data])

    return (
        <div className="filter-by-category">
            <FiltersDropdown
                title={categoryId ? data?.categoryName : t("categories")}
                isActive={isDropdownActive}
                toggleDropdown={toggleDropdown}
            >
                <ItemList
                        items={data?.subcategories || []}
                        renderItem={(subcategory, key) => (
                            <ProductsBySubCategories
                                key={key}
                                subcategory={subcategory}
                                categoryId={categoryId}
                            />
                        )}/>
            </FiltersDropdown>
        </div>
    )
}
