import Image from 'next/image'
import React from 'react'

const ExImage = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-black/80 p-20 w-full items-center flex flex-col justify-center">
        <div className="font-bold flex justify-between text-center items-center mb-10 space-x-10 w-full">
            <div className="flex-1 border-b border-white"></div>
            <h2 className="text-white text-2xl ">建築事例をご紹介</h2>
            <div className="flex-1 border-b border-white"></div>
        </div>
        <div>
            <div className='flex'>
                <div className="m-4 relative">
                    <Image
                        src='/image/project1.jpg'
                        alt='事例1'
                        height={200}
                        width={400}
                        className="border-4 border-white"
                    />
                    <div className="absolute bottom-0 left-3 text-white ">PROJECT_01</div>
                </div>
                <div className="m-4 relative">
                    <Image
                        src='/image/project2.jpg'
                        alt='事例2'
                        height={200}
                        width={400}
                        className="border-4 border-white"
                    />
                    <p className="absolute bottom-0 left-3 text-white">PROJECT_02</p>
                </div>
            </div>
            <div className='flex'>
                <div className="m-4 relative">
                    <Image
                        src='/image/project3.jpg'
                        alt='事例3'
                        height={200}
                        width={400}
                        className="border-4 border-white"
                    />
                    <p className="absolute bottom-0 left-3 text-white">PROJECT_03</p>
                </div>
                <div className="m-4 relative">
                    <Image
                        src='/image/project4.jpg'
                        alt='事例4'
                        height={200}
                        width={400}
                        className="border-4 border-white"
                    />
                    <p className="absolute bottom-0 left-3 text-white">PROJECT_04</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExImage