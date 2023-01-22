import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import MobileMenue from "./MobileMenu";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import LongNav from "./LongNav";
import useScrollDirection from "../../../hooks/useScrollDirection";
import scrollToggle from "../../../hooks/scrollToggle";

export default function HeadCard() {

  const [expanded, setExpanded] = useState(false);
  const scrollDirection = useScrollDirection();

  const all = "z-[15] w-full bg-repeat bg-[url('/BG.webp')]"
  const height = " h-28 md:h-56 "
  const small = ` fixed  ${!expanded && scrollDirection === "down" ? " -top-40" : "top-0"} transition-all duration-500 `
  const large = " mdlg:static mdlg:top-0 "


  useEffect(() => {
    scrollToggle(expanded)

  }, [expanded])

  return (
    <div className='' >

      <div className={height + "w-full"}>
        <div className={height + all + small + large}>

          {/* --- Content --- */}
          <div className={height + "flex flex-row md:flex-col w-full"}>

            <Logo />

            {/* --- longNav --- */}
            <div className="hidden md:block w-full h-1/2">
              <div className="h-full w-full grid place-content-center">
                <LongNav />
              </div>
            </div>

            {/*--- Hamburger --- */}
            <div
              className="md:hidden grid place-content-center h-full w-1/4 "
              onClick={() => setExpanded(!expanded)}>
              <Hamburger expanded={expanded} />
            </div>

          </div>

          {/* ---Mobile Menue */}
          <div className={` ${expanded ? 'block' : 'hidden'}`}>
            <MobileMenue />
          </div>

        </div >
      </div>

      <div className="hidden  mt-5 border-t-2 md:flex justify-center border-red-500">
        <div className="h-2 bg-red-500 w-[20vh] md:w-[15vw]" ></div>
      </div>
    </div >
  )
}