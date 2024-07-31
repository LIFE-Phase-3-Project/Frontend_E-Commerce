import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../../../redux/slices/paginationSlice";
import { PaginationButton } from "./PaginationButton";
import { setFilters } from "../../../../redux/slices/filtersSlice";

export const Pagination = () => {
    const dispatch = useDispatch();
    const { page, pageSize, totalCount } = useSelector(state => state.pagination);
    const pages = Math.ceil(totalCount / pageSize);

    
    useEffect(() => {
        dispatch(setFilters({ page, pageSize }));
    }, [page, dispatch, pageSize]);

    const handlePageChange = (newPage) => {
        if (newPage !== page && newPage > 0 && newPage <= pages) {
            dispatch(changePage(newPage));
        }
    };

    if (pages <= 1) return null;

    return (
        <div className="pagination mt-10">
            <div className="pagination-buttons flex justify-center items-center">
                <PaginationButton onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Prev</PaginationButton>

                <PaginationButton onClick={() => handlePageChange(1)} active={page === 1}>1</PaginationButton>

                {page > 3 && <span className="mx-1">...</span>}

                {page > 2 && <PaginationButton onClick={() => handlePageChange(page - 1)}>{page - 1}</PaginationButton>}

                {page !== 1 && page !== pages &&
                    <PaginationButton active>{page}</PaginationButton>
                }

                {page < pages - 1 && <PaginationButton onClick={() => handlePageChange(page + 1)}>{page + 1}</PaginationButton>}

                {page < pages - 2 && <span className="mx-1">...</span>}

                <PaginationButton onClick={() => handlePageChange(pages)} active={page === pages}>{pages}</PaginationButton>

                <PaginationButton onClick={() => handlePageChange(page + 1)} disabled={page === pages}>Next</PaginationButton>
            </div>
        </div>
    );
};
