import React from 'react'
import { certificate } from '../constants'
const Certificate = () => {
  return (
    <div id='certificate' className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-cols'>
         {certificate.map(({ imgPath, title, desc, link }) => (
          <div key={title} className="flex flex-col gap-4 rounded-xl p-8 bg-white/2 backdrop-blur-sm border border-white/1 shadow-lg">
              <div className="size-14 flex items-center justify-center">
                 <img src={imgPath} alt={title} className="max-w-full max-h-full" />
               </div>
               <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
               <p className="text-white/60 text-lg">{desc}</p>
                 <a href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline mt-auto">
                     View
                  </a>
              </div>))}
      </div>
    </div>
  )
}

export default Certificate
