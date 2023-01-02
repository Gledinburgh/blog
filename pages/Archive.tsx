
import Blog from '../components/Blog'
import Card from '../components/Card'
import HeadCard from '../components/HeadCard'
import ArchiveCard from '../components/ArchiveCard'
import ArchiveCard1 from '../components/ArchiveCard1'


export default function Archive() {
  return (



    <>
      <ArchiveCard1 x={1} />
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => <ArchiveCard x={x} />)
      }
    </>




  )
}
