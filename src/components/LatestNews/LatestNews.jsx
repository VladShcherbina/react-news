import styles from './styles.module.css'
import BannersList from '../BannersList/BannersList'
import { useFetch } from '../Helpers/hooks/useFetch'
import { getLatestNews } from '../../api/apiNews'

const LatestNews = () => {
    const {data, isLoading} = useFetch(getLatestNews)
    return (
        <section className={styles.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews