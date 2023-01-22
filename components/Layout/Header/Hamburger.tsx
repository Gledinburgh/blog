import { useEffect } from "react"

export default function Hamburger({ expanded }: { expanded: boolean }) {


  useEffect(() => {

  }, [expanded])

  return (
    <div className={`z-[25] relative space-y-2 md:space-y-4'} `}>
      <div className={`border-black border-2 rounded-md w-10 h-2.5 md:w-16 md:h-2 bg-yellow-50 ${expanded ? ' top-1/4 rotate-45 absolute ' : 'block'} transition-all duration-500`}></div>
      <div className={`border-black border-2 rounded-md w-10 h-2.5 md:w-16 md:h-2 bg-yellow-50 ${expanded ? ' invisible' : ' visible'}`}></div>
      <div className={`border-black border-2 rounded-md w-10 h-2.5 md:w-16 md:h-2 bg-yellow-50  ${expanded ? ' -top-1/4 -rotate-45 absolute ' : 'block'} transition-all duration-500`}></div>


    </div>
  )

}