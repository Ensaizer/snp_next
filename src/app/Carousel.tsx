import React from 'react'
import Image from 'next/image'

export default function Carousel() {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-600px">
    <Image alt='volvo 1' src="/1.jpg" fill={true} sizes="(max-width: 768px) 100vw, 33vw" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full h-96">
    <Image alt='volvo 2' src="/2.jpg" fill={true} sizes="(max-width: 768px) 100vw, 33vw" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-96">
    <Image alt='volvo 3' src="/3.jpg" fill={true} sizes="(max-width: 768px) 100vw, 33vw" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-96">
    <Image alt='volvo 4' src="/4.jpg" fill={true} sizes="(max-width: 768px) 100vw, 33vw" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}