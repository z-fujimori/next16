import Image from 'next/image';
import React from 'react'

export type ContactCardType = {
    src: string;
    title: string;
}

const ContactCard = ({ src, title }: ContactCardType) => {
  return (
    <div>
        <a href="">
          <div className='relative border duration-100 ring-black hover:ring  border-black h-52 w-60 m-5 p-5 flex flex-col justify-center items-center '>
            <Image
                src={src}
                alt=''
                width={80}
                height={80}
                className=""
            />
            <p className="">{title}</p>
            <div className="absolute border-t-[20px] border-r-[20px] border-t-transparent border-r-black right-1 bottom-1"></div>
          </div>
        </a>
    </div>
  )
}

export default ContactCard