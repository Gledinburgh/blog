import Image from 'next/image'
import Link from 'next/link'
import Face from '../public/railyard-eye3.webp'

export default function RailyardCard() {

  return (
    <div className="overflow-hidden relative text-slate-900 max-h-48 h-48">

      <Image
        className='left-[-20%] top-[-25%] h-full w-auto absolute'
        src={Face}
        alt={"Holy Relapse Photo"}
        width={200}
        height={200}
        object-fit=''
      />
      <div className="  h-full bg-zinc-50">
        <div className="h-full mx-5 border-t">


          <div className='flex  pt-4 flex-row'>
            <div className='invisible relative overflow-hidden rounded-full h-7 w-7'>
              <Image
                className=''
                src={'/shroomie2.webp'}
                fill
                object-fit="cover"
                alt=''
              />

            </div>
            <div className='ml-3'>Railyard Ghost</div>
            {/* <div className='text-slate-600' >- tiney words</div> */}
          </div>

          <Link href="/updates/1">
            <div className='mt-2 h-24 flex flex-row'>
              < div className="h-20 overflow-hidden  w-3/5" >
                <div className=" text-lg font-bold">Get a mean look from the wrong side of the tracks</div>
              </div >
              <div className="h-20 relative overflow-hidden ml-10 aspect-[13/9]">
                <Image
                  className="object-cover h-full w-full "
                  src={'/StreetPhoto-thumbnail.png'}
                  fill
                  object-fit="cover"
                  alt=''
                />
              </div>
            </div>
          </Link>

          <div className=' text-sm flex flex-row' >
            <div className=' bg-slate-200 rounded-full px-2 '>The Holy Relapse</div>
            <div className=' max-h-min bg-slate-200 rounded-full px-2 whitespace-nowrap'>Jan-2022</div>
          </div>



        </div>
      </div >
    </div >


  )
}