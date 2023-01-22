
import Link from 'next/link'
import { BsChevronCompactRight } from 'react-icons/bs'

export default function Visit({ children, href }) {

  return (
    <Link href={href}>
      <div className='text-center text-xl lg:text-3xl rounded grid content-center justify-center h-[10vh] bg-red-500 bg-repeat bg-[url("/BG.webp")]'>
        <div className=''>
          <h3 className='mb-2 font-thin inline-flex tracking-wide text-yellow-50 leading-[1] '>
            {children} <BsChevronCompactRight />

          </h3>
          <div className='flex text-center rounded-full bg-red-50'>

          </div>
        </div>
      </div>
    </Link>
  )
}