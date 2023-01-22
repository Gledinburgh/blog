
import Blog from './Content/BlogPostLayout'
import Card from '../Card'
import HeadCard from './Header/HeadCard'
import UpdateCard1 from '../UpdateCard1'
import MobileMenue from './Header/MobileMenu'
import Image from 'next/image'

//Page Type indicator located in child
//If page type is not empty string
//try to map the appropriate head card layout

export default function Layout({ children, content }: any) {
  return (
    <div
      className="relative bg-yellow-50/50 "
      style={{}}
    >


      {children}
      <div className='mt-[5vh] bg-repeat bg-[url("/BG.webp")] pt-10 text-center h-28 font-thin tracking-wide text-base lg:text-xl text-yellow-50'>
        Tales From The Abando 2023 All Rights Reserved
      </div>
    </div >



  )
}
