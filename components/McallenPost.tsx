import Image from "next/image"

export default function McAllenPost() {

  return (
    <div className=" text-slate-800 m-5">
      <div className="h-32"></div>

      <div className=" text-3xl font-extrabold"> The Holy Relapse Takes McAllen Texas </div>

      <div className=" text-slate-500 text-xl font-medium mt-3"> We took the second printing of The Holy Relapse am maecenas  </div>
      <div className="relative overflowhidden my-10 justify-center">
        <div className="aspect-[13/8] overflow-hidden relative justify-center">
          <Image

            className="object-cover"
            src={"/mcallen.png"}
            alt={"Holy Relapse Photo"}
            fill
            object-fit='cover'
          />
        </div>
        <div className="my-2 text-center text-sm text-slate-600">Jesus durring a street campaign (2022)</div>

      </div>
      <div className="text-lg font-serif">
        <p>
          Amazing things happened at et dolore magna aliqua. Diam mcenas ulicies meget mauris pharetra. Eu consequat ac felis donec. You can find it here <a className=" underline text-blue-600" href=""> Utfaucibus.com</a> Ut faucibus integer. Ut pharetra sit amet aliquam id diam maecenas.
        </p>
        <br />

        <p>

          <div className=" font-sans my-10 justify-center">
            <div className="aspect-[13/10] overflow-hidden relative  justify-center">
              <Image
                className="object-cover h-full w-full "
                src={"/mcallen2.png"}
                alt={"Holy Relapse Photo"}
                fill
                object-fit='cover'
              />
            </div>
            <div className="my-2 text-center text-sm text-slate-600">Collection of photos in front of Mauro&apos;s mural <br /> (Juntos Co-Op 2022)</div>

          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white">@$$ #0!3</span>
          </span>
          Ut faucibus integer. Ut pharetra sit amet aliquam id diam maecenas. Urna porttitor rhoncus dolor purus non enim praesent element
        </p>
        <div className="my-10 justify-center">
          <div className="aspect-[13/10] overflow-hidden relative  justify-center">
            <Image
              className="object-cover h-full w-full "
              src={"/mcallen3.png"}
              alt={"Holy Relapse Photo"}
              fill
              object-fit='cover'
            />
          </div>
          <div className="font-sans my-2 text-center text-sm text-slate-600">Jesus durring a street campaign (2022)</div>

        </div>
      </div>


    </div >
  )

}