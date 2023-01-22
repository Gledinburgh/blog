export default function Join() {

  return (
    <div className=' text-center text-xl lg:text-3xl rounded grid content-center justify-center min-h-[15vh] bg-red-500 bg-repeat bg-[url("/BG.webp")]'>

      <h3 className='mb-2 font-thin tracking-wide text-yellow-50 text-center '>
        GET UPDATES
      </h3>

      <div className=' flex flex-row lg:text-2xl text-xl text-center rounded-full bg-red-50'>
        <input placeholder='your email address' className='w-2/3 font-thin text-center inline-flex rounded-l-full' type={"text"}></input>
        <button className='p-2 inline bg-yellow-50 font-thin w-1/3 rounded-r-full'>JOIN</button>
      </div>

    </div>
  )
}