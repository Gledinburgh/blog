import HeadCard from "../Header/HeadCard";

export default function BlogListLayout({ children, title }: any) {
  return (

    <div>
      <HeadCard />

      <div className='flex max-w-screen overflow-hidden'>


        <div className="hidden md:block grow"></div>

        <div className='flex max-w-screen-md grow justify-center'>
          <div className='grid grid-col-1 my-2 mx-2 gap-2'>



            <h1 className="text-center m-5 md:m-[vw] text-xl lg:text-3xl">{title}</h1>



            {children}
          </div>
        </div>

        <div className="hidden md:block grow"></div>


      </div>



      <div className=" border-b-2 flex justify-center border-red-500">
        <div className="h-2 bg-red-500 w-[20vh] md:w-[15vw]" ></div>
      </div>


    </div>




  )
}
