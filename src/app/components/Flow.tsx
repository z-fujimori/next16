import React from 'react'
import FlowCard from './FlowCard'
import FlowBlock from './FlowBlock'

const Flow = () => {
  return (
    <div className=" bg-white pt-20 flex flex-col justify-center m-auto">
        <div className="flex items-center justify-between space-x-10 p-5 max-w-4xl">
          <div className="flex-1 border border-black"></div>
          <h2 className="text-black text-2xl font-bold">家ができるまでの流れ</h2>
          <div className="flex-1 border border-black"></div>
        </div>
      
        <p className='max-w-4xl'>お問合せいただいてから、家が完成するまでの流れです</p>

        <div className="flex max-w-4xl ">
            <div className="w-[360px] relative flex flex-col justify-center m-5">
              <div className="bg-yellow-200 w-8 h-4/5 mx-auto"></div>
              <div className="absolute inset-0 flex flex-col justify-center text-white">
                <FlowBlock blockText="1. ヒアリング" />
                <FlowBlock blockText="2. プラン提案" />
                <FlowBlock blockText="3. 契約" />
                <FlowBlock blockText="4. 着工" />
                <FlowBlock blockText="5. 完成" />
              </div>
            </div>
            <div className="m-5">
                <FlowCard num={1} title="ヒアリング" body="テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト" />
                <FlowCard num={2} title="プラン提案" body="テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト" />
                <FlowCard num={3} title="契約" body="テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト" />
                <FlowCard num={4} title="着工" body="テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト" />
                <FlowCard num={5} title="完成" body="テキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキスト" />
            </div>
        </div>
    </div>
  )
}

export default Flow