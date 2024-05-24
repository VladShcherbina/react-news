import styles from './styles.module.css'
import NewsItem from '../NewsItem/NewsItem'
import withSkeleton from '../Helpers/hocs/withSkeleton'

const NewsList = ({news}) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => {
                return <NewsItem key={item.id} item={item}/>
            })}
        </ul>
    )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'banner', 10)

export default NewsListWithSkeleton