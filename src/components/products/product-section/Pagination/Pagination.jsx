import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActivePage } from "../../../../redux/slices/paginationSlice";
import { PaginationButton } from "./PaginationButton";
import { setFilters } from "../../../../redux/slices/filtersSlice";

export const Pagination = () => {
    const dispatch = useDispatch();
    const { activePage, postsPerPage, totalCount } = useSelector(state => state.pagination);
    const pages = Math.ceil(totalCount / postsPerPage);

    
    useEffect(() => {
        dispatch(setFilters({ page: activePage, pageSize: postsPerPage }));
    }, [activePage, dispatch, postsPerPage]);

    const handlePageChange = (newPage) => {
        if (newPage !== activePage && newPage > 0 && newPage <= pages) {
            dispatch(changeActivePage(newPage));
        }
    };

    if (pages <= 1) return null;

    return (
        <div className="pagination mt-10">
            <div className="pagination-buttons flex justify-center items-center">
                <PaginationButton onClick={() => handlePageChange(activePage - 1)} disabled={activePage === 1}>Prev</PaginationButton>

                <PaginationButton onClick={() => handlePageChange(1)} active={activePage === 1}>1</PaginationButton>

                {activePage > 3 && <span className="mx-1">...</span>}

                {activePage > 2 && <PaginationButton onClick={() => handlePageChange(activePage - 1)}>{activePage - 1}</PaginationButton>}

                {activePage !== 1 && activePage !== pages &&
                    <PaginationButton active>{activePage}</PaginationButton>
                }

                {activePage < pages - 1 && <PaginationButton onClick={() => handlePageChange(activePage + 1)}>{activePage + 1}</PaginationButton>}

                {activePage < pages - 2 && <span className="mx-1">...</span>}

                <PaginationButton onClick={() => handlePageChange(pages)} active={activePage === pages}>{pages}</PaginationButton>

                <PaginationButton onClick={() => handlePageChange(activePage + 1)} disabled={activePage === pages}>Next</PaginationButton>
            </div>
        </div>
    );
};
