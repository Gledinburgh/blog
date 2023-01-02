import Image from 'next/image'
import Link from 'next/link'

export default function ContactCard({ x }: { x: number }) {

  return (
    <div className="text-slate-900 mx-5 max-h-48 h-48">
      <div className="  h-full bg-zinc-50">
        <div className="h-full mx-5 border-t">


          <div className='h-full flex flex-col-2 items-center'>


            <div className=" overflow-hidden align-middle mr-10 w-1/4">
              <Image
                className='rounded-full'
                src={'https://picsum.photos/150/150'}
                width={100}
                height={100}

                alt=''
              />
            </div>

            <div className='w-3/4 flex flex-row'>
              < div className="" >
                <div className=" text-lg font-bold">
                  Tails From The Abando
                </div>
                <div>thisistheemail@gmail.com</div>
                <div>@thisistheInsta</div>
                <div>@thisistheTiktok</div>
              </div >

            </div>

          </div>








        </div>
      </div >
    </div >


  )
}