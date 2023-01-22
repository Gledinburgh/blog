import { nav } from "../../../data/navLinks"
export default function MobileMenue() {

  return (

    < div className="z-[21] text-yellow-50 pt-28 overflow-hidden h-full w-full fixed top-0 right-0 bg-red-300 bg-repeat bg-[url('/BG.webp')]" >
      <ul className="flex flex-col items-center justify-between min-h-[250px]">
        {nav.map((x, index) => {
          return (

            <li key={index + "mobileNav"} className=" my-8 uppercase">
              <a href={x.href}>{x.text}</a>
            </li>


          )
        })}
      </ul>
    </div >




  )

}