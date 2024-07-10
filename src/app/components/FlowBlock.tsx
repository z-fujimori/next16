import React from 'react'

export type Type = {
    blockText: string
}

const FlowBlock = ({blockText}:Type) => {
  return (
    <div className="my-auto ">
        <div className="m-auto bg-gray-700 h-12 w-10/12 before:">
            <p className="text-center items-center text-white pt-5">
                {blockText}
            </p>
            <p className="
                relative after:w-full after:h-0
                after:border-x-[85px] after:border-solid after:border-t-[20px] 
                after:border-transparent after:border-t-gray-700 
                after:absolute after:top-1 "></p>
        </div>
    </div>
  )
}

export default FlowBlock