import Image from 'next/image'
import Link from 'next/link'

export default function ArchiveCard1({ x }: { x: number }) {

  return (
    <div className="text-slate-900 max-h-48 h-48">
      <div className="  h-full bg-zinc-50">
        <div className="h-full mx-5 border-t">


          <div className='flex  pt-4 flex-row'>
            <div className='relative overflow-hidden rounded-full h-7 w-7'>
              <Image
                className=''
                src={'/twins-icon.png'}
                fill
                object-fit="cover"
                alt=''
              />

            </div>
            <div className='ml-3'>Characters of The Abando World</div>
            {/* <div className='text-slate-600' >- tiney words</div> */}
          </div>

          <Link href="/archive/thetwins">
            <div className='mt-2 h-24 flex flex-row'>
              < div className="h-20 overflow-hidden  w-3/5" >
                <div className=" text-lg font-bold">The Twins</div>
              </div >
              <div className="h-20 relative overflow-hidden ml-10 aspect-[13/9]">
                <Image
                  className="object-cover h-full w-full "
                  src={'/twins.png'}
                  fill
                  object-fit="cover"
                  alt=''
                />
              </div>
            </div>
          </Link>

          <div className=' text-sm flex flex-row' >
            <div className=' bg-slate-200 rounded-full px-2 '>Crust Punks</div>
            <div className=' max-h-min bg-slate-200 rounded-full px-2 whitespace-nowrap'>Characters</div>
          </div>



        </div>
      </div >
    </div >


  )
}