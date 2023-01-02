import Image from "next/image"

export default function PawnShopPost() {

  return (
    <div className="text-slate-800 m-6">
      <div className="h-32"></div>

      <div className=" text-3xl font-extrabold"> The Pawn Shop </div>

      <div className=" text-slate-500 text-xl font-medium mt-3">A mystic store front</div>
      <div className="my-10 justify-center">
        <div className="aspect-[13/8] overflow-hidden relative  justify-center">
          <Image
            className="object-cover h-full w-full "
            src={"/pawnshop.png"}
            alt={"Holy Relapse Photo"}
            fill
            object-fit='cover'
          />
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
          <div className="my-2 text-center text-sm text-slate-600">Panel From "The Holy Relapse" (2021)</div>
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
        <div className="animate-eight  absolute h-200 w-200">
          <Image
            className="animate-bounce"
            src={"/fly.webp"}
            alt={"Holy Relapse Photo"}
            width={100}
            height={100}

          />

        </div>
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