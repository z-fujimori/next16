import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
  return (
    <div className="bg-black bg-opacity-80 w-full p-20 items-center flex flex-col justify-between">
        <div className="flex items-center justify-between mb-10 space-x-10 w-full max-w-4xl">
            <div className="flex-1 border-b border-white"></div>
            <h2 className="text-white text-2xl font-bold">明るいHOUSEの特徴</h2>
            <div className="flex-1 border-b border-white"></div>
        </div>
        <ul className="text-white flex justify-between max-w-4xl">
            <FeatureCard icon='design' title='デザイン' body='テキストテキストテキストテキスト' link='' />
            <FeatureCard icon='quality' title='性能' body='テキストテキストテキストテキスト' link='' />
            <FeatureCard icon='support' title='サポート' body='テキストテキストテキストテキスト' link='' />
        </ul>
    </div>
  )
}

export default Features