export default function Title({ children }) {
  return (
    <div className=" font-sans">
      <div className=" border-b-2 border-red-500">
        <div className="h-2 bg-red-500 w-[20%]" ></div>
      </div>
      <h1 className="py-5 font-extrabold text-xl md:text-3xl">
        {children}
      </h1>
      <div className=" border-t-2 border-red-500">
        <div className="h-2 bg-red-500 w-[20%]" ></div>

      </div>
    </div>
  )
}