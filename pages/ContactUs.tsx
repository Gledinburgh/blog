
import Blog from '../components/Layout/Content/BlogPostLayout'
import Card from '../components/Card'
import HeadCard from '../components/Layout/Header/HeadCard'
import ContactCard from '../components/ContactCard'
import BlogListLayout from '../components/Layout/Content/BlogListLayout'


export default function ContactUs() {
  return (




    <BlogListLayout title={"CONTACT US"}>
      {
        [1, 2, 3, 4].map((x) => <ContactCard key={'Contact' + x} />)
      }
    </BlogListLayout>



  )
}
