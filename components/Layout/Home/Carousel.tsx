import { useState } from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Image from 'next/image';

export default function Carousel({ slides, fill, aspect }) {


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className=" ">


      <div
        className={"relative duration-500 " + aspect}
      >
        <Image
          className={`object-${fill}`}
          src={slides[currentIndex]}
          placeholder='blur'
          alt=""
          fill
        />

        <div onClick={prevSlide} >
          <button className='hidden md:block border-black border-[.25rem] hover:p-3 duration-500 text-yellow-50 bg-red-500  absolute top-1/2 -translate-x-0 -translate-y-1/2 left-1 md:left-5 p-2 rounded-full cursor-pointer'>
            <BsChevronCompactLeft size={30} />
          </button>
        </div>

        <div onClick={prevSlide}>
          <button className='hidden md:block border-black border-[.25rem]  text-yellow-50 bg-red-500 absolute top-1/2 -translate-x-0 -translate-y-1/2 right-1 md:right-5 hover:p-3 duration-500 p-2 rounded-full cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </button>
        </div>

      </div>
      <div className=' bottom-0 left-0 flex top-4 justify-center py-5 md:py-10'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
        {slides.map((slide, slideIndex) => {
          return (<button
            key={slideIndex + "carouselSlide"}
            onClick={() => goToSlide(slideIndex)}
            className={`${slideIndex === currentIndex ? "text-slate-500" : "text-slate-900"}  text-3xl cursor-pointer`}>
            <RxDotFilled />
          </button>)

        })
        }
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  )
}