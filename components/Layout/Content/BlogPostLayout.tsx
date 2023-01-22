import HeadCard from "../Header/HeadCard";

export default function BlogPostLayout({ children }: any) {
  return (
    <div>

      <HeadCard />

      <div className='flex bg-zinc-100 max-w-screen overflow-hidden'>
        <div className="hidden md:block grow"></div>
        <div className='flex max-w-screen-md grow justify-center'>
          <div className='grid grid-col-1 my-5 mx-2 gap-2'>
            {children}
          </div>
        </div>

        <div className="hidden md:block grow"></div>
      </div>
    </div>




  )
}
