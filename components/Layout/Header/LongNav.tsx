import Link from "next/link";
import { nav } from "../../../data/navLinks";

export default function LongNav() {

  return (
    <nav className="pt-3 font-bold text-lg w-full items-center justify-center align-middle content-center flex flex-row flex-nowrap ">

      {nav.map(x => {
        return (
          <Link href={x.href} key={"longnav" + x.href}>
            <div className="">
              <div className="mr-5 pb-5">
                {x.text}
              </div>
            </div>
          </Link>
        )
      })}
    </nav>
  )

}