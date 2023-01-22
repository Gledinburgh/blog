import Image from "next/image"
import Link from "next/link";
export default function GenericCard({ content }) {

  const style = {
    backgroundImage: "url(/mcallen1.png)",
    backgroundPosition: "center"
  }

  const { icon, topic, date, description, title, heroImage, href } = content;

  return (
    <Link href={href}>
      <div className="w-full text-slate-800 hover:text-black hover:bg-white bg-zinc-50  md:h-56 rounded border-2 border-zinc-100 flex">

        <div
          className="rounded-l h-auto w-1/4 bg-cover text-center overflow-hidden" style={heroImage} title="Woman holding a mug">
        </div>


        <div className="w-3/4 p-4 flex flex-col justify-between leading-normal">


          <div className='text-sm flex justify-between flex-row'>
            <div className=" inline-flex">
              <div className='relative aspect-square w-9 md:w-12'>
                <Image
                  className=''
                  src={icon.src}
                  fill
                  object-fit="cover"
                  alt={icon.alt}
                />

              </div>
              <div className='mx-3'>{topic}</div>

            </div>

            <div className="text-slate-500">{date}</div>
            {/* <div className='text-slate-600' >- tiney words</div> */}
          </div>


          <h2 className="line-clamp-1 tracking-tighter font-bold text-md md:text-xl my-3">{title}</h2>
          <p className="line-clamp-2 md:line-clamp-3 text-sm md:text-base">{description}
          </p>



          <div className=" text-right text-sm font-semibold text-gray-700  ">
            read &gt;
          </div>

        </div>

      </div >
    </Link>
  )
}