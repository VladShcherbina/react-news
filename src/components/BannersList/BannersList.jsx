import withSkeleton from "../Helpers/hocs/withSkeleton"
import NewsBanner from "../NewsBanner/NewsBanner"

import styles from './styles.module.css'

const BannersList = ({banners}) => {
    return (
        <ul className={styles.banners}>
            {banners?.map(banner => {
                return (
                    <NewsBanner key={banner.id} item={banner} />
                )
            })}
        </ul>
    )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 9, 'row')

export default BannersListWithSkeleton