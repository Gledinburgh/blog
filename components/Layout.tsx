
import Blog from '../components/Blog'
import Card from '../components/Card'
import HeadCard from '../components/HeadCard'
import HeadCardBlank from '../components/HeadCardBlank'
import UpdateCard1 from '../components/UpdateCard1'


export default function Layout({ children }: any) {
  return (
    <div className='flex flex-col-2 w-screen'>


      <div className='grow flex flex-row  justify-center'>
        <div className='w-full'>
          <HeadCard />
          {children}
          {/* <UpdateCard1 x={1} />
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((x) => <Card x={x} />)
          } */}

        </div>
      </div>

      <div className='grow hidden w-[20rem] mdlg:block bg-zinc-100' >
        <HeadCardBlank />
        <div className='border-l h-full  flex-col'>

          <div className='border-y h-56 grid grid-cols-1 gap-4 content-center'>
            <div className='text-center '>
              Welcome to <b>Tails From The Abando</b>'s Blog Experiment
            </div>

            <div className='h-full'>

            </div>
          </div>

        </div>
      </div>




    </div>



  )
}
