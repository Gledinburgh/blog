
import Image from 'next/image'
import Card from '../components/Card'
import GenericAnnouncment from '../components/Cards/GenericAnnouncment'
import HomeLayout from '../components/Layout/Content/HomeLayout'
import AnnouncementsList from '../components/Layout/Home/AnnouncementsList'
import Carousel from '../components/Layout/Home/Carousel'
import Join from '../components/Layout/Home/Join'
import WelcomeMessage from '../components/Layout/Home/WelcomeMessage'

import mcallen from '../public/mcallen.png'
import mcallen1 from '../public/mcallen1.png'
import mcallen2 from '../public/mcallen2.png'

import UpdateCard1 from '../components/UpdateCard1'
import Visit from '../components/Layout/Home/Visit'


export default function Home() {

  const content = {
    "heroImage": "/shop-example.png",
    "icon": {
      "src": "/gimp-icon.png",
      "alt": ""
    },
    "topic": "MERCH",
    "date": "Nov 2021",
    "title": "E-Shop Grand Openeing!",
    "description": "Find Comics, Merch and support our projects at our new BigCartel shop front!",
    "href": "https://blacksneakers.bigcartel.com/",
    "action": "tap to shop"
  }
  const content1 = {
    "heroImage": "/mcallen.png",
    "topic": "EVENT",
    "date": "Nov 2021",
    "title": "Join us at Not 4 You Gallery",
    "description": "We are vending at Not 4 You Gallery for a night of art, music and fun. Come say hi and let check out some amazing work from us and our freinds.",
    "href": "https://m.facebook.com/notforyougallery/",
    "action": "find out more"
  }
  const content2 = {
    "heroImage": "/announcement-example1.png",
    "icon": {
      "src": "/gimp-icon.png",
      "alt": ""
    },
    "topic": "WEBSITE UPDATE",
    "date": "Nov 2021",
    "title": "New Mobile Mode",
    "description": "You can now view TailsFromTheAbando.com on your mobile phone, and packed with hidden easeregss, explore and let us know what you think",
    "href": "/archive/thetwins",
    "action": "read more"
  }
  const content3 = {
    "heroImage": "/twins.png",
    "topic": "NEW BLOG POST",
    "date": "Nov 2021",
    "title": "The Twins",
    "description": "Get the back story behind *** and &&, also known as the twins in our lates blog post",
    "href": "/archive/thetwins",
    "action": "go to blog"
  }

  const slides = [
    mcallen,
    mcallen1,
    mcallen2,

  ]




  const contentList = [content, content1, content2, content3]

  return (
    <HomeLayout>

      <div className=''>

        <div className='relative aspect-video md:m-[5vw]'>
          <Carousel slides={slides} fill={'cover'} aspect={"aspect-square lg:aspect-[14/8] "} />
          <div className='absolute h-24 w-24  md:h-32 md:w-32 lg:h-52 lg:w-52 bottom-0  z-10'>
            <Image
              className="absolute left-[10%] bottom-[20%] md:bottom-[-10%]"
              src={"/rats.png"}
              alt={"Rats chillin"}
              height={200}
              width={200}
            />
          </div>


        </div>

        <div className='mt-[5vh]  mx-[3vw] md:mx-[8vw] '>


          <div className='gap-5 content-center justify-center grid grid-cols-1 md:grid-cols-2'>
            <WelcomeMessage />
            <Join />
            <Visit href="/Updates">VISIT THE BLOG</Visit>
            <Visit href="https://blacksneakers.bigcartel.com/">VISIT STORE</Visit>

          </div>

          <div className='my-10'>

            <div className=" border-t-2 flex justify-center border-red-500">
              <div className="h-2 bg-red-500  w-[20vh] md:w-[15vw]" ></div>
            </div>
            <div>
              <h1 className="py-3 font-bold text-xl text-center md:text-3xl">
                ANNOUNCMENTS
              </h1>
            </div>

            <AnnouncementsList contentList={contentList} />
            <div className=" border-b-2 flex justify-center border-red-500">
              <div className="h-2 bg-red-500  w-[20vh] md:w-[15vw]" ></div>

            </div>
          </div>



        </div>


      </div>

    </HomeLayout>







  )
}
