import { useGetAllCategoriesQuery } from "../../../redux/api/categoriesApi";
import { useGetAllProductsQuery } from "../../../redux/api/productsApi";
import { MdLocalMall } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { VscPreview } from "react-icons/vsc";
import { MdOutlineCategory } from "react-icons/md";
import CountUp from 'react-countup';


export const InformationCards = () => {
    const { data:products } = useGetAllProductsQuery({pageSize: 1});
    const { data:categories } = useGetAllCategoriesQuery({pageSize: 1});

    const informationCards = [
        {
            icon: MdLocalMall,
            name: "Products",
            number: products?.totalCount,
        },
        {
            icon: MdOutlineCategory,
            name: "Categories",
            number: categories?.length,
        },
        {
            icon: HiOutlineUsers,
            name: "Users",
            number: 100, 
        },
        {
            icon: VscPreview,
            name: "Reviews",
            number: 50, 
        },
    ]

    return (
        <div className="information-cards-container mt-7 grid grod-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
            {informationCards.map((item, index) => {
                return (
                    <div key={index} className="information-card bg-green-dark text-white dark:bg-admin-sidebar-color rounded py-4 px-3">
                        <div className="information-card-left">
                            <item.icon size={18} className="text-green-400 mb-1"/>
                            <CountUp className="text-xl my-3" end={item.number} duration={3.5} />
                            <h2 className="text-green-400">{item.name}</h2>
                        </div>
                        <div className="information-card-right"></div>
                    </div>
                )
            })}
        </div>
    )
}