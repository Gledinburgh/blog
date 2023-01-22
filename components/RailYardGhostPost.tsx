import Image from "next/image"
import Carousel from "./Layout/Home/Carousel"
import Image1 from '../public/RailYardGhost/1.jpg'
import Image2 from '../public/RailYardGhost/2.jpg'
import Image3 from '../public/RailYardGhost/3.jpg'
import Image4 from '../public/RailYardGhost/4.png'
import Image5 from '../public/RailYardGhost/5.jpg'
import Image6 from '../public/RailYardGhost/6.png'
import Image10 from '../public/RailYardGhost/10.jpeg'
import Image11 from '../public/RailYardGhost/11.jpg'
import Image12 from '../public/RailYardGhost/12.jpg'
import Image13 from '../public/RailYardGhost/13.jpg'
import ImageCaption from "./BlogPostComponents/ImageCaption"
import ImageContent from "./BlogPostComponents/ImageContent"
import Title from "./BlogPostComponents/Title"

export default function RailYardGhostPost() {

  const slides = [Image12, Image13, Image6, Image4, Image5, Image1, Image2]


  const content = {
    p1: "Best described as a \"hood western\", The Railyard Ghost is the second comic illustrated by Mauro and Glenn.",
    p12: "The comic was released in 2019 at Black Sheep 3 gallery exhibition at Galley Eva. It was a run of 100 copies and opened up the potential for the Horror series \“Tales from the Abando\”. ",
    p2: "The comic was released in 2019 at Black Sheep 3 gallery exhibition at Galley Eva. It was a run of 100 copies and opened up the potential for the Horror series “Tales from the Abando”.",
    p3: "The comic takes place in the East train yard after the events of The Holy Relapse and follows a story about the possession of young clown after drinking a sidewalk slammer."
  }

  return (
    <div className="text-base md:text-2xl my-5 font-serif text-slate-800">

      <Title>The Rail Yard Ghost</Title>

      <div className="aspect-[15/10] md:aspect-video my-10 w-full">

        <div className="h-full flex flex-row ">

          <div className=" flex grow flex-col">

            <ImageContent fill={"contain"} ImageData={Image2} />
            <ImageCaption>Front cover of The Railyard Ghost</ImageCaption>

          </div>


          <div className="flex grow flex-col ">

            <ImageContent fill="contain" ImageData={Image1} />
            <ImageCaption>Sculpture used in street campaign </ImageCaption>

          </div>

        </div>

      </div>





      <p> {content.p1}</p>
      <br />
      <p> {content.p2}</p>
      <br />
      <div className="">
        <Carousel slides={slides} fill={'contain'} aspect={"aspect-square"} />


      </div>





      <br />

      <p>{content.p3}</p>

      <br />

      <div className="">
        <h3 className="text-center">Mauro Explains</h3>
        <br />

        <p>
          &quot; I had a very chaotic upbringing. I was raised in a punk rock house, I was exposed to allot of drugs and train hoppers and live music. I always implement my roots into my art work. I came up with the concept in 2016 after a wild binder black out. My alcoholism was completely unchecked. I had developed a really bad reputation for being a drunken fool...&quot;
        </p>
        <br />

        <div className="flex grow overflow-hidden flex-col aspect-[10/4] ">
          <ImageContent fill="cover" ImageData={Image11} />
        </div>
        <br />
        <div className="flex grow overflow-hidden flex-col aspect-[10/4] ">
          <ImageContent fill="cover" ImageData={Image10} />
          <ImageCaption>
            Murals part of Rail Yard Ghost street campaign
          </ImageCaption>
        </div>

        <br />

        <p>
          &quot;...I had drank a side walk slammer and a hand full of varieties and  blacked out and woke up in a back yard. I had gotten in a fight and had bruises all on my forehead. The comic references the horrors of blacking out. Waking up the next day and having to walk back the trail of terror you left behind...&quot;
        </p>
        <br />
        <p>
          &quot;...The comic didn’t come into fruition until 2018 when Glenn began to work at the studio with me. We had a studio space on the west side of downtown right by the jail.  We spent about a year working on it.&quot;
        </p>

        <br />

        <div className="flex grow aspect-[1/1.35] flex-col ">
          <ImageContent fill="contain" ImageData={Image6} />
          <ImageCaption>
            Page from The Rail Yard Ghost
          </ImageCaption>
        </div>

        <div>

        </div>

      </div>



    </div >
  )

}