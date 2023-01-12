
import Blog from '../components/Blog'
import Card from '../components/Card'
import HeadCard from '../components/Layout/Header/HeadCard'
import ContactCard from '../components/ContactCard'


export default function ContactUs() {
  return (



    <>
      {
        [1, 2, 3, 4].map((x) => <ContactCard key={'Contact' + x} x={x} />)
      }
    </>


  )
}
