import Image from "next/image"
import Link from "next/link"

export default function Logo() {

  const sizes = "(max-width: 72px) 100vw, (max-width: 72px) 50vw, 33vw"

  return (
    <div className="h-full w-3/4 md:w-full ">
      <Link href={"/"}>
        <div className=" relative grid place-content-center h-full w-full ">
          <Image
            className="object-contain py-3 "
            src={"/Title.gif"}
            fill
            sizes={sizes}
            alt="title imgae"
            object-fit="contain"
          />

        </div>
      </Link>
    </div>
  )

}