import Image from "next/image";
import Link from "next/link";

export default function GenericAnnouncment({ content }: { content: any }) {

  var { action, topic, date, description, title, heroImage, href } = content;


  return (
    <div className="h-full w-full bg-zinc-50 hover:bg-white rounded overflow-hidden shadow-lg">
      <Link href={href}>
        <div className="relative h-1/2 w-full">
          <Image
            className="object-cover"
            fill
            object-fit="cover"
            src={heroImage}
            alt="" />
          <div className="font-thin tracking-wide text-xl lg:text-3xl text-white absolute bottom-0 px-4 py-1 bg-red-500" >{topic}</div>
        </div>

        <div className="flex-col justify-between flex h-1/2">

          <div className="border-red-500 border-t-2 px-6 pt-4">
            <h2 className="line-clamp-3 font-bold text-xl mb-2">{title}</h2>
            <p className=" line-clamp-3 text-gray-700 text-base">
              {description}
            </p>
          </div>

          <div className="px-6 pb-2">
            <div className=" text-right rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{action} &gt;</div>
          </div>

        </div>
      </Link>
    </div>
  )
}