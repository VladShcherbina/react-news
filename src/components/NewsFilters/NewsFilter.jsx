import { getCategories } from '../../api/apiNews'
import Categories from '../Categories/Categories'
import { useFetch } from '../Helpers/hooks/useFetch'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import styles from './styles.module.css'

const NewsFilter = ({filters, changeFilter}) => {

    const {data: dataCategories} = useFetch(getCategories)

    return (
        <div className={styles.filters}>
        {dataCategories ? ( 
            <Slider step={10}>
                <Categories
                categories={dataCategories.categories} 
                setSelectedCategory={(category) => changeFilter('category', category)} 
                selectedCategory={filters.category} /> 
            </Slider>
        ) : null}

        <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}  />

        </div>
    )
}

export default NewsFilter