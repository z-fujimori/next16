import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full text-white bg-black px-10 text-center'>
        <ul className="flex justify-between my-16">
            <li><a href="">私たちについて</a></li>|
            <li><a href="">サービス</a></li>|
            <li><a href="">商品情報</a></li>|
            <li><a href="">展示会</a></li>|
            <li><a href="">暮らしの日記</a></li>|
            <li><a href="">会社概要</a></li>
        </ul>
        <p className="p-5">Copyright © 2021 Akarui HOUSE All Rights Reserved.</p>
    </footer>
  )
}

export default Footer