import React from 'react'

export type Type = {
    icon: string,
    title: string,
    body: string,
    link: string|null
}

const FeatureCard = ({icon, title, body, link}:Type) => {
  return (
    <li className="p-5 w-[1024px] ">
      <a href="">
        <div className="relative border border-solid rounded-full py-[calc(50%-11px)] mb-10  overflow-hidden text-center [&>div]:hover:left-0">    
          <p className="z-10">{icon}</p>
          <div className="w-full h-full bg-slate-100 absolute top-0 opacity-20 duration-500 -left-full "></div>
        </div>
      </a>
      <p className="text-center">{title}</p>
      <p>{body}</p>
    </li>
  )
}

export default FeatureCard