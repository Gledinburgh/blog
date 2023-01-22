import Image from "next/image";

export default function ImageContent({ ImageData, fill }) {

  const sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

  return (
    <div className="relative grow justify-center">
      <Image
        className={`object-${fill}`}
        fill
        sizes={sizes}
        src={ImageData}
        alt={"Holy Relapse Photo"}
      />

    </div>
  )
}