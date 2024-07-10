import React from 'react'

export type FlowBody = {
    num: number;
    title: string;
    body: string;
}

const FlowCard = ({ num, title, body }:FlowBody) => {
  return (
    <div className="flex pt-5">
      <div className="mr-2">
        <p className="bg-gray-700 block w-9 h-9 line-h rounded-full leading-10 text-center items-center text-white" >
          {num}
        </p>
      </div>

      <div>
        <div className="h-9 flex items-center border-b border-b-slate-950 ">
          <h2 className="ml-3 text-xl font-bold">{title}</h2>
        </div>
        <p className="pt-3">{ body }</p>
      </div>
    </div>
  )
}

export default FlowCard