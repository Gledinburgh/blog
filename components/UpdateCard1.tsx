import Image from 'next/image'
import Link from 'next/link'

export default function UpdateCard1({ x }: { x: number }) {

  return (
    <div className="text-slate-900 max-h-48 h-48">
      <div className="  h-full bg-zinc-50">
        <div className="h-full mx-5 border-t">


          <div className='flex  pt-4 flex-row'>
            <div className='relative overflow-hidden rounded-full h-7 w-7'>
              <Image
                className=''
                src={'/gimp-icon.png'}
                fill
                object-fit="cover"
                alt=''
              />

            </div>
            <div className='ml-3'>On the Road Again</div>
            {/* <div className='text-slate-600' >- tiney words</div> */}
          </div>

          <Link href="/updates/2">
            <div className='mt-2 h-24 flex flex-row'>
              < div className="h-20 overflow-hidden  w-3/5" >
                <div className=" text-lg font-bold">The Holy Relapse Takes McAllen TX</div>
              </div >
              <div className="h-20 relative overflow-hidden ml-10 aspect-[13/9]">
                <Image
                  className="object-cover h-full w-full "
                  src={'/mcallen1.png'}
                  fill
                  object-fit="cover"
                  alt=''
                />
              </div>
            </div>
          </Link>

          <div className=' text-sm flex flex-row' >
            <div className=' bg-purple-200 rounded-full px-2 '>Street Campaign</div>
            <div className=' max-h-min bg-slate-200 rounded-full px-2 whitespace-nowrap'>Jun-2021</div>
          </div>



        </div>
      </div >
    </div >


  )
}