import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import MobileMenue from "./MobileMenu";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import LongNav from "./LongNav";
import useScrollDirection from "../../../hooks/useScrollDirection";
import useScrollToggle from "../../../hooks/useScrollToggle";


export default function HeadCard() {

  const [expanded, setExpanded] = useState(false);
  const scrollDirection = useScrollDirection();

  const all = "z-[15] bg-red-200 w-full "
  const height = " h-28 md:h-56 "
  const small = ` fixed  ${!expanded && scrollDirection === "down" ? " -top-40" : "top-0"} transition-all duration-500 `
  const large = " mdlg:static mdlg:top-0 "

  useEffect(() => {
    useScrollToggle(expanded)
      , [expanded]
  })

  return (
    <div className="">

      <div className={height + "w-full bg-zinc-100 "}>
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
              <Hamburger />
            </div>

          </div>

          {/* ---Mobile Menue */}
          <div className={` ${expanded ? 'block' : 'hidden'}`}>
            <MobileMenue />
          </div>

        </div >
      </div>
    </div>
  )
}