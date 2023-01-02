import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function HeadCard() {


  return (
    <div className="flex overflow-hidden bg-zinc-100 ">
      <div className="flex flex-col h-40 w-full">





        <div className="h-full ">
          <div className="bg-red-500 grid place-content-center h-full w-full ">
            <Image
              src={"/Title.gif"}
              height={100}
              width={200}
              alt="title imgae"
            />

          </div>
        </div>

        <nav className="mt-4 ml-5 items-center justify-center align-middle content-center flex flex-row flex-nowrap w-full">


          <Link href='/'>
            <div className="hover:border-slate-500">
              <div className="mr-5 pb-5 border-b-2 hover:border-slate-500">Updates</div>
            </div>
          </Link>
          <Link href='/ContactUs'>
            <div className="hover:border-slate-500">
              <div className="mr-5 pb-5 border-b-2 hover:border-slate-500">Contact Us</div>
            </div>
          </Link>
          <Link href='/Archive'>
            <div className="hover:border-slate-500">
              <div className="mr-5 pb-5 border-b-2 hover:border-slate-500">Archive</div>
            </div>
          </Link>




        </nav>






      </div>
    </div>

  )
}