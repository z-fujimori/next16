import Image from 'next/image'
import React from 'react'

const Side = () => {
  return (
    <div className="fixed pl-4 w-452">
        <div className="flex items-center">
            <Image 
                src='/image/favicon.ico'
                alt='アイコン'
                height={200}
                width={200}
                className="h-12 w-12"
            />
            <h1 className="text-sm">明るい HOUSE</h1>
        </div>
        <nav className="text-[12px]">
            <ul className="m-4 pb-5 [&>li]:m-2"> 
                <li><a href="">私たちについて</a></li>
                <li><a href="">サービス</a></li>
                <li><a href="">商品情報</a></li>
                <li><a href="">展示会</a></li>
                <li><a href="">暮らしの日記</a></li>
                <li><a href="">会社概要</a></li>
            </ul>
            <ul className="m-4 [&>li]:m-2">
                <li><a href="">Twitter</a></li>
                <li><a href="">facebook</a></li>
                <li><a href="">instagram</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Side