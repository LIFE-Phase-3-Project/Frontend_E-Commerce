import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useGetAllBrandsQuery } from "../../../redux/api/brandsApi";

export const BrandAlbums = () => {
    const { data } = useGetAllBrandsQuery();
    const [documentWidth, setDocumentWidth] = useState(document.body.clientWidth);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setDocumentWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        if(data) {
            if (documentWidth > 1450) {
                setFilteredData(data.slice(0, 6));
            } else if (documentWidth > 1250 && documentWidth <= 1450) {
                setFilteredData(data.slice(0, 5));
            } else if (documentWidth > 865 && documentWidth <= 1250) {
                setFilteredData(data.slice(0, 4));
            } else if (documentWidth > 750 && documentWidth <= 865) {
                setFilteredData(data.slice(0, 3));
            } else if (documentWidth >= 550 && documentWidth <= 750) {
                setFilteredData(data.slice(0, 2));
            } else {
                setFilteredData(data.slice(0, 1));
            }
        }
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [data, documentWidth]);
    return (
        <div className="brand-albums mt-40 flex justify-center sm:justify-between px-4 lg:px-10">
            {filteredData?.map((category, key) => {
                return (
                    <div key={key} className="brand-card w-96 
                                                sm:w-60 
                                                md:w-52
                                                lg:w-56
                                                text-black
                                                dark:text-white
                                                ">
                                                    
                        <Link to={"?clothes"}>
                            <div className="brand-card-image bg-center bg-cover w-full h-52 rounded-6
                                                sm:h-36"
                                                style={{ backgroundImage: `url(${category.image})` }}>
                            </div>

                            <div className="brand-card-content text-center py-2">
                                <h3 className="text-lg">{category.title}</h3>
                                <p className="text-sm opacity-70">1000 products</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}