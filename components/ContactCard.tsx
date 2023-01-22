import Image from "next/image"
import Link from "next/link";
import { FaTiktok, FaInstagram } from 'react-icons/fa'
import { GrMailOption } from 'react-icons/gr'

export default function GenericCard() {

  const style = {
    backgroundImage: "url(/mcallen1.png)",
    backgroundPosition: "center"
  }


  return (
    <Link href={""}>
      <div className="w-screen max-w-screen-md text-slate-800 hover:text-black hover:bg-white bg-zinc-50 h-40 md:h-56 rounded border-2 border-zinc-100 flex">
        <div
          className="grid content-center justify-center rounded-l h-auto w-1/4 overflow-hidden" title="Woman holding a mug">
          <Image
            className='rounded-full'
            src={'https://picsum.photos/150/150'}
            width={100}
            height={100}

            alt=''
          />
        </div>


        <div className="w-3/4 p-4">
          <div className="mb-8">
            <h3 className="line-clamp-1 flex tracking-tighter font-bold text-md md:text-xl my-3">Mauro de la Tierra</h3>
            <p className=" pt-[5%] inline-flex text-3xl w-full">
              <span className=" mr-[10%] "><FaTiktok /></span>  <span className="mr-[10%]"><FaInstagram /></span>  <span className="mr-[10%]"><GrMailOption /></span>
            </p>
          </div>
        </div>

      </div >
    </Link >
  )
}