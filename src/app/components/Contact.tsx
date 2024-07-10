import React from 'react'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <div className="py-32 flex flex-col justify-center m-auto">
      <div className="flex space-x-3 items-center max-w-4xl  ">
        <div className="border border-black flex-1"></div>
        <h2 className="text-2xl font-bold">お問い合わせ</h2>
        <div className="border border-black flex-1"></div>
      </div>
      <p className="py-12">お問い合わせは下記からお願いいたします。</p>
      <div className="flex">
          <ContactCard src='/image/icon-document.png' title='資料請求' />
          <ContactCard src='/image/icon-seminar.png' title='Web説明会' />
          <ContactCard src='/image/icon-talk.png' title='個別相談' />
      </div>
    </div>
  )
}

export default Contact