
import Blog from '../components/Layout/Content/BlogPostLayout'
import Card from '../components/Card'
import HeadCard from '../components/Layout/Header/HeadCard'
import ArchiveCard from '../components/ArchiveCard'
import ArchiveCard1 from '../components/ArchiveCard1'
import RailyardCard from '../components/RailyardCard'
import BlogListLayout from '../components/Layout/Content/BlogListLayout'


export default function Archive() {
  return (



    <BlogListLayout title={"ARCHIVE"}>
      <ArchiveCard1 x={1} />
      {
        [1, 2, 3, 4].map((x) => <ArchiveCard key={'Archive' + x} x={x} />)
      }
      <RailyardCard />
    </BlogListLayout>

  )
}
