

export default function WelcomeMessage() {
  return (
    <div className='flex flex-col justify-between text-center w-full text-xl lg:text-3xl'>


      <div className=" border-t-2 flex justify-center border-red-500">
        <div className="h-2 bg-red-500 w-[20vh] md:w-[15vw]" ></div>
      </div>
      <div>
        <h1 className="py-3 font-bold text-xl md:text-3xl">
          WELCOME
        </h1>
        <p className='text-base mb-5'>Tails From the Abando is a post apocoliptic adventure series created by Mauro de la Teirra. On this website you can find out more about the series, the creatives behind it and upcomming events.</p>
      </div>


      <div className=" border-b-2 flex justify-center border-red-500">
        <div className="h-2 bg-red-500  w-[20vh] md:w-[15vw]" ></div>

      </div>


    </div>
  )
}