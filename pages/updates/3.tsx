
import Blog from '../../components/Layout/Content/BlogPostLayout'
import Card from '../../components/Card'
import BlogListLayout from '../../components/Layout/Content/BlogListLayout'
import HeadCard from '../../components/Layout/Header/HeadCard'
import McAllenPost from '../../components/McallenPost'
import RailYardGhostPost from '../../components/RailYardGhostPost'
import BlogPostLayout from '../../components/Layout/Content/BlogPostLayout'


export default function update3() {

  const content = {
    type: "blogPost"
  }

  return <BlogPostLayout>

    <RailYardGhostPost />
  </BlogPostLayout>


}
