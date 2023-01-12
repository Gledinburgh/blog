import { nav } from "../../../data/navLinks"
export default function MobileMenue() {

  return (

    < div className="z-[21] pt-28 overflow-hidden h-full w-full fixed top-0 right-0 bg-red-300" >
      <ul className="flex flex-col items-center justify-between min-h-[250px]">
        {nav.map((x) => {
          return (

            <li className="border-b border-gray-400 my-8 uppercase">
              <a href={x.href}>{x.text}</a>
            </li>


          )
        })}
      </ul>
    </div >




  )

}