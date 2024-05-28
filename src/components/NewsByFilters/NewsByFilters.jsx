import { getNews } from '../../api/apiNews'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constant/constant'
import { useDebounce } from '../Helpers/hooks/useDebounce'
import { useFetch } from '../Helpers/hooks/useFetch'
import { useFilters } from '../Helpers/hooks/useFilters'
import NewsFilter from '../NewsFilters/NewsFilter'
import NewsList from '../NewsList/NewsList'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'
import styles from './styles.module.css'

const NewsByFilters = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })
   
    const debouncedKeywords = useDebounce(filters.keywords, 1000)

    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    })

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    }
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1)
        }
    }
    const handlePageClick = (pageNumber) => {
        changeFilter('page_number', pageNumber)
    }

    return (
        <section className={styles.section}>
        <NewsFilter filters={filters} changeFilter={changeFilter}/>

        <PaginationWrapper 
            top
            bottom
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage={filters.page_number}
            totalPages={TOTAL_PAGES} 
            >

        <NewsList isLoading={isLoading} news={data?.news} />
        </PaginationWrapper>
        </section>
    )
}

export default NewsByFilters