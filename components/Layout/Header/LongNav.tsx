import Link from "next/link";
import { nav } from "../../../data/navLinks";

export default function LongNav() {

  return (
    <nav className="text-yellow-50 tracking-wide text-lg lg:text-xl w-full font-thin items-center justify-center align-middle content-center flex flex-row flex-nowrap ">

      {nav.map(x => {
        return (
          <Link href={x.href} key={"longnav" + x.href}>
            <div className="">
              <div className=" border-yellow-50 hover:border-b mr-5 mb-5">
                {x.text.toUpperCase()}
              </div>
            </div>
          </Link>
        )
      })}
    </nav>
  )

}