export const PaginationButton = ({ onClick, children, active, disabled }) => {
    const customStyle = `
        mx-1 border-2 border-custom-green text-green-dark dark:border-pink-medium dark:text-pink-light 
        px-4 rounded disabled:opacity-50`;

    return (
        <a
            href={!active ? "#product-section" : undefined}
            onClick={!active ? onClick : undefined}
            className={`${customStyle} ${active && "bg-custom-green dark:bg-pink-medium text-white dark:text-white"} ${disabled && "opacity-50"}`}
        >
            {children}
        </a>
    );
};
