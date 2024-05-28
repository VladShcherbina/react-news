import Pagination from "../Pagination/Pagination"

const PaginationWrapper = ({top, bottom, children, ...paginationProps}) => {
    return (
        <div>
            {top && <Pagination {...paginationProps}/>}
                {children}
            {bottom && <Pagination {...paginationProps}/>}

        </div>
    )
}

export default PaginationWrapper