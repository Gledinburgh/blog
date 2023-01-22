
import Card from '../components/Card'
import GenericCard from '../components/Cards/GenericCard'
import BlogListLayout from '../components/Layout/Content/BlogListLayout'
import UpdateCard1 from '../components/UpdateCard1'


export default function Updates() {

  const content = {
    "heroImage": {
      backgroundImage: "url(/mcallen2.png)",
      backgroundPosition: "center"
    },
    "icon": {
      "src": "/gimp-icon.png",
      "alt": ""
    },
    "topic": "On The Road",
    "date": "Jun 2022",
    "title": "Juntos Co-op Welcomes Jesus",
    "description": "We take our second edition of \"The Holy Relapse\" to Mcallen Texas, and here is what went down.",
    "href": "updates/2"
  }
  const content1 = {
    "heroImage": {
      backgroundImage: "url(/holyrelapse-cover.png)",
      backgroundPosition: "center"
    },
    "icon": {
      "src": "/opi.webp",
      "alt": ""
    },
    "topic": "In The Gallery",
    "date": "Nov 2021",
    "title": "\"The Holy Relapse\" Releases",
    "description": "Not 4 You hosted our comic release, let us take you around and see how things went",
    "href": "updates/1"
  }
  const content2 = {
    "heroImage": {
      backgroundImage: "url(/StreetPhoto-thumbnail.png)",
      backgroundPosition: "center"
    },
    "icon": {
      "src": "/cone.png",
      "alt": ""
    },
    "topic": "In The Streets",
    "date": "Nov 2020",
    "title": "Missing Jesus Street Campaign",
    "description": "The Angels are on the hunt for the missing son of god in the form of a video series across the streets of San Antonio",
    "href": "updates/1"
  }
  const content3 = {
    "heroImage": {
      backgroundImage: "url(/RailYardGhost/4.png)",
      backgroundPosition: "center"
    },
    "icon": {
      "src": "/RailYardGhost/pig-icon.png",
      "alt": ""
    },
    "topic": "Along The Tracks",
    "date": "Apr 2019",
    "title": " \"The Railyard Ghost\"",
    "description": "Best described as a \"hood western\", Mauro shares his inspiration behind the second comic illustrated by Mauro and Glenn.",
    "href": "updates/3"
  }
  const content4 = {
    "heroImage": {
      backgroundImage: "url(/mcallen3.png)",
      backgroundPosition: "center"
    },
    "icon": {
      "src": "/gimp-icon.png",
      "alt": ""
    },
    "topic": "In The Begining",
    "date": "Nov 2017",
    "title": "How Tails From The Abando Came To Be",
    "description": "Explore the birth of the series and what made it what it is today",
    "href": "updates/1"
  }
  return (
    <>
      <BlogListLayout title={"BLOG"}>

        <GenericCard content={content3} />
        <GenericCard content={content} />
        <GenericCard content={content1} />
        <GenericCard content={content2} />
        <GenericCard content={content4} />




      </BlogListLayout>

    </>








  )
}
