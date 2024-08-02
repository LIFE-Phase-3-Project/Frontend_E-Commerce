import { useState } from "react";
import { useGetAllCategoriesQuery, useGetCategoryByIdQuery } from "../../../../../redux/api/categoriesApi";
import { FiltersDropdown } from "../general/FiltersDropDown";
import { ItemList } from "../general/ItemList";
import { ProductsByCategories } from "./ProductsByCategories";
import { useSelector } from "react-redux";
import { ProductsBySubCategories } from "./ProductsBySubCategories";
import { useGetAllSubCategoriesQuery, useGetSubCategoriesByIdQuery } from "../../../../../redux/api/subCategoriesApi ";

export const FilterByCategory = ({ category: categoryId, subCategory: subCategoryId, t }) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const filters = useSelector((state) => state.filters.filters);
    const { data: categories, isLoading } = useGetAllCategoriesQuery({ filters });
    const { data: category } = useGetCategoryByIdQuery(categoryId, { filters });
    const { data: subCategory } = useGetSubCategoriesByIdQuery(subCategoryId, { filters });

    const toggleDropdown = () => setIsDropdownActive(!isDropdownActive);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className="filter-by-category">
            {
            subCategoryId 
            ? <h2 className="pl-3 mb-2 capitalize">{subCategory?.subCategoryName}</h2>
            : <FiltersDropdown
                title={categoryId ? category?.categoryName : t("categories")}
                isActive={isDropdownActive}
                toggleDropdown={toggleDropdown}
            >
                <ItemList
                    items={categoryId ? category?.subcategories : categories || []}
                    renderItem={(item, key) => (
                        categoryId
                            ? <ProductsBySubCategories key={key} subcategory={item} categoryId={categoryId} />
                            : <ProductsByCategories key={key} category={item} />
                    )}
                />
            </FiltersDropdown>
            }
        </div>
    );
};
