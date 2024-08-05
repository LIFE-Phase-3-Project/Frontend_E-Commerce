import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export const BrandAlbums = () => {
    const data = [
        {
            "id": 1,
            "title": "Brooks Brothers",
            "description": "",
            "image": "https://photo-cdn2.icons8.com/ry9FbUGuYZYjXhss7Oc3_Y_de5xp7YaeyxiNj8ztaFM/rs:fit:288:192/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L2NvbmNlcHRfcHJl/dmlld3MvMjk1LzFh/OTBkMTUzLWJjMzQt/NGQ5Zi1hN2RjLWIx/YmQyYzk5MTFhNS5q/cGc.webp",
            "products": []
        },
        {
            "id": 2,
            "title": "J.Crew",
            "description": "New year products",
            "image": "https://photo-cdn2.icons8.com/vjYHLl5MOL1sEpFe80t78zhbKYxgLre7xkMgs5Ep10o/rs:fit:288:192/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L2NvbmNlcHRfcHJl/dmlld3MvNjY4LzEy/NmM0MzVhLTVjMjYt/NGFiMS1iZDkyLTQx/ZDZlMjFhMzdiNy5q/cGc.webp",
            "products": []
        },
        {
            "id": 3,
            "title": "Oculus",
            "description": "Vr products",
            "image": "https://photo-cdn2.icons8.com/UobajmbolyqouQphxELSRe0lS1mGEtTwvZWbe6nv4tw/rs:fit:576:385/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNzQ1Lzk4MDcz/N2U0LTAzYmEtNGMx/My05NjQ2LWJhM2Zh/MjI2Mzk5Ni5qcGc.webp",
            "products": []
        },
        {
            "id": 4,
            "title": "KitchenAid",
            "description": "Kitchen products",
            "image": "https://photo-cdn2.icons8.com/QpVsTefkdelqakpB8CP-zrY6ja-gxM9rMic46201dQM/rs:fit:288:192/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L2NvbmNlcHRfcHJl/dmlld3MvNzE1LzYx/Y2EwNmFlLWQzNDct/NGY5Zi05OTc1LTNl/NjViOWZiNzdiMC5w/bmc.webp",
            "products": []
        },
        {
            "id": 5,
            "title": "Coca Cola",
            "description": "Drinks",
            "image": "https://photo-cdn2.icons8.com/FUCPmp_jGBhBOJdNsCvXJ8Ho4zPGbANJZ0h8wz-iVNA/rs:fit:576:432/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi83ZjNlNDFjZGEz/Zjk0MTg1OGFlNWRj/NWU2NzI2MjE4MC5q/cGc.webp",
            "products": []
        },    
        {
            "id": 6,
            "title": "Patagonia",
            "description": "Clothes products",
            "image": "https://photo-cdn2.icons8.com/tjjNILMAkvwJklhh1wKiBGMJEeHCsZRGrXYm5ey_bZ0/rs:fit:576:863/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvMTMvM2YyYjQ5/OWQtZWI1Mi00NmRk/LWFhNGMtZmYwYWQ5/OGEwOWIyLmpwZw.webp",
            "products": []
        },        
    ]
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
    }, [documentWidth]);
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