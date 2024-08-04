import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

export const DesktopTable = ({ name, data, theadTh, dataFields, deletingId, handleDelete, page, setPage, nrOfPages, sortField, sortDirection, handleSort }) => {
    return (
        <>
            <thead className="hidden lg:table-header-group">
                <tr className="bg-green-dark dark:bg-admin-sidebar-color text-white">
                    {theadTh.map((th, key) => (
                        <th key={key} className="py-2 capitalize cursor-pointer" onClick={() => th.filterable && handleSort(dataFields[key])}>
                            {th.name}
                            {th.filterable && (
                                sortField === dataFields[key] ?
                                    (sortDirection === "a-z" ? <FaSortUp className="inline ml-2" /> : <FaSortDown className="inline ml-2" />)
                                    : <FaSort className="inline ml-2" />
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="desktop-tbody hidden lg:table-row-group
                            [&>*:nth-child(even)]:bg-green-200 hover:[&>*:nth-child(even)]:bg-green-extra-light [&>*:nth-child(even)]:text-green-extra-dark
                            dark:[&>*:nth-child(even)]:bg-gray-500 dark:hover:[&>*:nth-child(even)]:bg-admin-sidebar-color dark:[&>*:nth-child(even)]:text-gray-300">
                                
                {data && data.map((item) => {
                    return <tr className="text-center text-green-extra-dark bg-green-100 hover:bg-green-extra-light dark:bg-dashboard-extra-light dark:hover:bg-admin-sidebar-color dark:hover:text-white" key={item.id}>
                        {dataFields.map((field, key) => {
                            if (field === "edit") {
                                return (
                                    <td key={key} className="py-2 w-16 cursor-pointer">
                                        <Link to={`${name === "category" ? item.categoryId : item.id}`} className="flex items-center justify-center">
                                            <MdModeEdit className="w-full" />
                                        </Link>
                                    </td>
                                );
                            } else if (field === "delete") {
                                return (
                                    handleDelete && <td key={key} className="py-2 w-20 cursor-pointer" onClick={() => handleDelete(name === "category" ? item.categoryId : item.id)}>
                                        <MdDelete className={`w-full ${deletingId === item.id ? 'text-red-500' : ''}`} />
                                    </td>
                                );
                            } else {
                                return <td key={key} className="py-2 w-12">{item[field]}</td>;
                            }
                        })}
                    </tr>
})}
                <tr className="bg-green-dark dark:bg-admin-sidebar-color text-white">
                    { (name !== "user" && name !== "reviews") &&
                    <td className="text-center" colSpan={theadTh.length > 2 ? nrOfPages > 1 ? 2 : theadTh.length : 1}>
                        <Link to={'create'} className="flex items-center justify-center">
                            Create {name} <IoMdAdd className="ml-2" size={20}/>
                        </Link>
                    </td>
                    }
                    {nrOfPages > 1 && <td colSpan={theadTh.length > 2 ? theadTh.length -2 : 1} className="text-end py-1 pr-16 text-sm">
                        <button 
                            disabled={page <= 1}
                            onClick={() => setPage(page -1)}
                            className={page === 1 && "opacity-50"}
                            >
                            Prev
                        </button>
                        
                        <span className="mx-3">Page: {page} of {nrOfPages}</span>
                        
                        <button 
                            disabled={page === nrOfPages}
                            onClick={() => setPage(page +1)}
                            className={page === nrOfPages && "opacity-50"}
                            >
                            Next
                        </button>
                    </td>
                    }
                </tr>
            </tbody>
        </>
    );
};
