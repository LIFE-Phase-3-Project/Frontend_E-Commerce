import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import React from 'react';
import { IoMdAdd } from "react-icons/io";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export const MobileTable = ({ name, data,theadTh, deletingId, handleDelete, page, setPage, nrOfPages }) => {
    const handlePageChange = (prev=null) => {
        prev === "prev" ? setPage(page -1) : setPage(page +1)
        window.scrollTo(0, 0);
    }
    return (
        <>
            <thead className="h-9 lg:hidden">
                <tr className="bg-green-dark dark:bg-admin-sidebar-color text-white">
                    <th className="capitalize" colSpan="2">{name} Table</th>
                </tr>
            </thead>
            <tbody className="lg:hidden ml-12 text-center w-9/12">
                {data && data.map((item) => (
                    <React.Fragment key={item.id}>
                        {theadTh.map((header, key) => (
                            <tr key={key} className="text-green-extra-dark bg-green-100 dark:bg-gray-300 dark:text-gray-900">
                                <td className="py-1 font-semibold bg-green-dark dark:bg-admin-sidebar-color text-white w-4/12">{header}</td>
                                <td className="py-2 w-8/12">
                                    {header === "Edit" ? (
                                        <Link to={`${name === "category" ? item.categoryId : item.id}`} className="flex items-center justify-center">
                                            <MdModeEdit className="w-full" />
                                        </Link>
                                    ) : header === "Delete" ? (
                                        <MdDelete
                                            className={`w-full cursor-pointer ${deletingId === item.id ? 'text-red-500' : ''}`}
                                            onClick={() => handleDelete(name === "category" ? item.categoryId : item.id)}
                                        />
                                    ) : (
                                        name === "category" ? item[header] : item[header.toLowerCase()]?.toString() || ""
                                    )}
                                </td>
                            </tr>
                        ))}
                        <tr className="border-b-2 border-green-700 dark:border-dashboard-light-color"></tr>
                    </React.Fragment>
                ))}
                <tr className="bg-green-dark dark:bg-admin-sidebar-color text-white">
                    <td colSpan={nrOfPages <= 1 && 2} className="text-center">
                        <Link to={'create'} className="flex items-center justify-center">
                            Create <IoMdAdd className="ml-2" size={20}/>
                        </Link>
                    </td>
                    
                    { nrOfPages > 1 &&
                    <td className="text-end py-1 pr-8 text-sm flex items-center justify-end">
                        <button 
                            disabled={page === 1}
                            onClick={() => handlePageChange("prev")}
                            className={page === 1 && "opacity-50"}
                            >
                            <MdNavigateBefore size={20}/>
                        </button>
                        
                        <span className="mx-3">{page} of {nrOfPages}</span>
                        
                        <button 
                            disabled={page === nrOfPages}
                            onClick={handlePageChange}
                            className={page === nrOfPages && "opacity-50"}
                            >
                            <MdNavigateNext size={20}/>
                        </button>
                    </td>
}
                </tr>
            </tbody>
        </>
    );
};
