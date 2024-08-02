import { useEffect, useState } from "react";
import { ProductsBySubCategories } from "../category/ProductsBySubCategories";
import { FiltersDropdown } from "../general/FiltersDropDown";
import { ItemList } from "../general/ItemList";
import { useSelector } from "react-redux";
import { useGetSubCategoriesByIdQuery } from "../../../../../redux/api/subCategoriesApi ";

export const FilterBySubCategory = ({ subCategory: subCategoryId, t }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [subCategory, setSubCategory] = useState({})

    
    const filters = useSelector((state) => state.filters.filters);
    const { data } = useGetSubCategoriesByIdQuery(subCategoryId, {filters});
    console.log("data")
    console.log(data)

    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);


    useEffect(() => {
        data && setSubCategory(data[0])
    }, [subCategory, data])

    return (
        <div className="filter-by-category">
            <FiltersDropdown
                title={subCategoryId ? data?.categoryName : t("categories")}
                isActive={isDropdownActive}
                toggleDropdown={toggleDropdown}
            >
                <ItemList
                        items={data?.subcategories || []}
                        renderItem={(subcategory, key) => (
                            <ProductsBySubCategories
                                // key={key}
                                // subcategory={subcategory}
                                // categoryId={categoryId}
                            />
                        )}/>
            </FiltersDropdown>
        </div>
    )
}
