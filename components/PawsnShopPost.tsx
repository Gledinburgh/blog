import Image from "next/image"
import Parallax from 'parallax-js'
import layer0 from '../public/parallax/pawnshop/pawnshop-0.webp'
import layer1 from '../public/parallax/pawnshop/pawnshop-1.webp'
import layer2 from '../public/parallax/pawnshop/pawnshop-2.webp'
import layer3 from '../public/parallax/pawnshop/pawnshop-3.webp'
import layer4 from '../public/parallax/pawnshop/pawnshop-4.webp'
import layer5 from '../public/parallax/pawnshop/pawnshop-5.webp'
import { MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from 'react'




export default function PawnShopPost() {

  const containerRef = useRef(null)
  const sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"


  useEffect(() => {
    console.log("useEffect: ParkContent")


    const parallaxInstance = new Parallax(containerRef.current, { hoverOnly: true, relativeInput: true })

    parallaxInstance.enable();
    parallaxInstance.limit(100, 100)

    return () => parallaxInstance.disable();
  }, [])


  return (
    <div className="text-slate-800 m-6">
      <div className="h-32"></div>

      <div className=" text-3xl font-extrabold"> The Pawn Shop </div>

      <div className=" text-slate-500 text-xl font-medium mt-3">A mystic store front</div>
      <div className="my-10 justify-center">
        <div className="bg-slate-900 flex items-center justify-center overflow-hidden">



          <div className="w-[110%] h-[110%]" ref={containerRef}>

            <Image
              data-depth={.2}
              className="object-cover h-full w-full "
              src={layer0}
              alt={"Holy Relapse Photo"}
              fill
              sizes={sizes}
              object-fit='cover'
              priority
            />
            <Image
              data-depth={.4}
              className="object-cover h-full w-full "
              src={layer1}
              alt={"Holy Relapse Photo"}
              priority
              fill
              sizes={sizes}
              object-fit='cover'
            />
            <Image
              data-depth={.8}
              className="object-cover h-full w-full "
              src={layer2}
              alt={"Holy Relapse Photo"}
              sizes={sizes}
              fill
              object-fit='cover'
            />


          </div>




        </div>
        <div className="text-center text-sm text-slate-600">The Houston street Pawn Shop (2022)</div>

      </div>
      <div className="text-lg font-serif">
        <p>
          The Pawn Shop is a magnet for lost souls and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas ultricies mi eget mauris pharetra. Eu consequat ac felis donec. Facilisis leo vel fringilla est. <a className=" underline text-blue-600" href=""> Utfaucibus.com</a> Ut faucibus integer. Ut pharetra sit amet aliquam id diam maecenas. Urna porttitor rhoncus dolor purus non enim praesent element
        </p>
        <br />
        <div className="my-5 font-sans justify-center">

          <div className="relative w-full h-52">
            <Image
              className="object-cover h-full w-full "
              src={"/pawnshop2.png"}
              alt={"Holy Relapse Photo"}
              fill
              object-fit='cover'
            />
          </div>
          <div className="my-2 text-center text-sm text-slate-600">Panel From &quot;The Holy Relapse&quot; (2021)</div>
        </div>

        <ul role="list" >
          <li>
            • dolore magnaere
          </li>
          <li>
            •  acilisis leo vel fringill
          </li>
          <li>
            •  ectetur adipiscing elit, sed do ei
          </li>
        </ul>

        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas ultricies mi eget mauris pharetra. Eu consequat ac felis donec. Facilisis leo vel fringilla est.
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">@$$ #0!3</span>
          </span>
          Ut faucibus integer. Ut pharetra sit amet aliquam id diam maecenas. Urna porttitor rhoncus dolor purus non enim praesent element
        </p>
      </div>


    </div >
  )

}

