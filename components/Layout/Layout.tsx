
import Blog from '../Blog'
import Card from '../Card'
import HeadCard from './Header/HeadCard'
import UpdateCard1 from '../UpdateCard1'
import MobileMenue from './Header/MobileMenu'


export default function Layout({ children }: any) {
  return (
    <div className='relative'>


      <HeadCard />


      <div className='flex flex-col-3 max-w-screen'>

        <div className='grow hidden shrink-0 w-0 flex-initial md:block bg-zinc-100' >
          <div className='border-l h-full  flex-col'>

            <div className='border-y h-56 grid grid-cols-1 gap-4 content-center'>
              <div className='text-center '>

              </div>

              <div className='h-full'>

              </div>
            </div>

          </div>
        </div>

        <div className=' overflow-hidden max-w-screen-md w-[30rem]  grow flex flex-row  justify-center'>
          <div className='relative w-full '>
            {children}
            {/* <UpdateCard1 x={1} />
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => <Card x={x} />)
          } */}

          </div>
        </div>

        <div className='grow hidden shrink-0 w-0 md:block bg-zinc-100' >
          <div className='border-l h-full  flex-col'>

            <div className='border-y h-56 grid grid-cols-1 gap-4 content-center'>
              <div className='text-center '>

              </div>

              <div className='h-full'>

              </div>
            </div>

          </div>
        </div>




      </div>
    </div>



  )
}
