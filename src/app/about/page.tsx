import React from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'
import about from '../images2/about.jpg'
import about2 from '../images2/about2.jpg'
import Team from '../components/Team'

function About() {
  return (
    <>
      <Heading title='About Us' />
      <div>
        <section className="text-gray-600 body-font">
          <div className=" mx-auto px-10 pb-16 flex flex-col md:flex-row items-center">
            <div className="lg:max-w-lg md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
              <Image
                className="object-cover object-center rounded-lg shadow-lg"
                alt="hero"
                src={about}
                width={450} 
                height={300} 
                unoptimized
              />

              <Image
                className="object-contain overflow-hidden absolute top-20 left-20 m-8 rounded-lg shadow-lg lg:block hidden"
                alt="second image"
                src={about2}
                width={350} 
                height={300} 
                unoptimized
              />
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 mt-8 flex flex-col space-y-6">
              <span className="text-blue-400 text-xl font-medium">Since 2013</span>
              <h1 className="title-font text-4xl mb-4 font-bold text-gray-900 leading-tight">
                Our story is one woven with passion, dedication, and a love for fashion.
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-700">
                Founded by a team of fashion-forward individuals, our company was born out of a desire to revolutionize the way people shop for clothing and accessories. We believe in the power of great design and the impact it has on the way we express ourselves.
              </p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <Team />
          </div>
        </section>

      </div>
    </>
  )
}

export default About