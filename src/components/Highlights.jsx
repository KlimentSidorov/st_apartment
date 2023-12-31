import React, { useState } from "react";


export default function Highlights({ title, parking, internet, pets,kitchen,amenities, bathroom }) {


    return (
  <div className='bg-blue-500'>
  <div className='container mx-auto px-4 py-10 lg:py-20'>
    <h3
      className='text-center lg:text-start text-4xl 2xl:text-6xl text-white mb-10 uppercase'
    >
      {title}
    </h3>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 grid-rows-auto'>
      <div className='flex flex-col items-center lg:items-start'>
        <p className='flex items-center mb-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            ><path
              fill='white'
              d='M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z'
            ></path></svg
          >
          <span className='ml-2 block text-white text-xl'>{parking.title}</span>
        </p>
        <span className='block text-white lg:max-w-[70%] text-center lg:text-start'
          >{parking.text}</span
        >
      </div>
      <div className='flex flex-col items-center lg:items-start'>
        <p className='flex items-center mb-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            ><path
              fill='white'
              d='M14.25 18.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm2.08-5.833a8.25 8.25 0 0 0-11.666 0 .75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 1 9.546 0 .75.75 0 0 0 1.06-1.06zm3.185-3.182c-4.979-4.98-13.051-4.98-18.03 0a.75.75 0 1 0 1.06 1.06c4.394-4.393 11.516-4.393 15.91 0a.75.75 0 1 0 1.06-1.06zm2.746-3.603C17.136-.043 6.864-.043.24 6.132A.75.75 0 1 0 1.26 7.23c6.05-5.638 15.429-5.638 21.478 0a.75.75 0 0 0 1.022-1.098z'
            ></path></svg
          >
          <span className='ml-2 block text-white text-xl'>{internet.title}</span>
        </p>
        <span className='block text-white text-center lg:text-start'
          >{internet.text}</span
        >
      </div>
      <div className='flex flex-col items-center lg:items-start'>
        <p className='flex items-center mb-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            ><path
              fill='white'
              d='M16.01 15a4.5 4.5 0 1 0-9 0l.75-.75a3.75 3.75 0 1 0 0 7.5 4.96 4.96 0 0 0 2.245-.59 3.277 3.277 0 0 1 3.018.005c.677.365 1.44.567 2.22.585a3.75 3.75 0 1 0 .018-7.5l.749.75zm-1.5 0c0 .414.336.75.75.75a2.25 2.25 0 0 1 0 4.5 3.435 3.435 0 0 1-1.536-.41 4.786 4.786 0 0 0-4.42-.005 3.457 3.457 0 0 1-1.562.415A2.247 2.247 0 0 1 5.51 18a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .75-.75 3 3 0 1 1 6 0zm-9.75-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.75 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z'
            ></path></svg
          >
          <span className='ml-2 block text-white text-xl'>{pets.title}</span>
        </p>
        <span className='block text-white text-center lg:text-start'
          >{pets.text}</span
        >
      </div>
      <div className='flex flex-col items-center lg:items-start'>
        <p className='flex items-center mb-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            ><path
              fill='white'
              d='M2.25 2.25h19.5L21 1.5v21l.75-.75H2.25l.75.75v-21l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v21c0 .414.336.75.75.75h19.5a.75.75 0 0 0 .75-.75v-21a.75.75 0 0 0-.75-.75H2.25zm-1.5 1.5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 21h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM18 15v3.539a.211.211 0 0 1-.211.211H6.211A.211.211 0 0 1 6 18.539v-7.078c0-.117.094-.211.211-.211h11.578c.116 0 .211.095.211.211V15zm1.5 0v-3.539a1.71 1.71 0 0 0-1.711-1.711H6.211c-.945 0-1.711.766-1.711 1.711v7.078c0 .945.766 1.711 1.711 1.711h11.578a1.71 1.71 0 0 0 1.711-1.711V15zM9 14.25h6a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zM5.25 4.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm3 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-6 3.375h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm11.25-3h5.25a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 0 0 1.5z'
            ></path></svg
          >
          <span className='ml-2 block text-white text-xl'>{kitchen.title}</span>
        </p>
        <ul
          className='text-white lg:list-disc lg:list-inside flex flex-col items-center lg:items-start'
        >
          {kitchen.data.map((data,i)=>{
         
            return (
            <li key={i} className='mb-1.5 last:mb-0'>{data}</li>
            )
          })}
          
        </ul>
      </div>

      <div className='flex flex-col items-center lg:items-start'>
        <p className='flex items-center mb-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            ><path
              fill='white'
              d='M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM12 15h8.5c.69 0 1.25.56 1.25 1.25v2.5l.75-.75H12l.75.75v-4.5L12 15zm0-1.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-2.5a2.75 2.75 0 0 0-2.75-2.75H12zm-10.5 6h21l-.75-.75v3l.75-.75h-21l.75.75v-3l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h21a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-21zm.75 5.25v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zm21 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM19.4 6.001L19.403 6H15.1v.001l.562-4.5V1.5h3.176L19.4 6zm1.49-.187l-.564-4.5A1.5 1.5 0 0 0 18.838 0h-3.176a1.5 1.5 0 0 0-1.488 1.314l-.563 4.5A1.499 1.499 0 0 0 15.102 7.5H19.4a1.499 1.499 0 0 0 1.49-1.687zm-4.39.936v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0z'
            ></path></svg
          >
          <span className='ml-2 block text-white text-xl'>{amenities.title}</span>
        </p>
        <ul
          className='text-white lg:list-disc lg:list-inside flex flex-col items-center lg:items-start'
        >
           {amenities.data.map((data,i)=>{
         
            return (
            <li key={i} className='mb-1.5 last:mb-0'>{data}</li>
            )
          })}
        </ul>
      </div>

      <div className='flex flex-col items-center lg:items-start'>
        <p className='flex items-center mb-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            ><path
              fill='white'
              d='M12.75 15h10.5l-.74-.873-.664 3.986a5.25 5.25 0 0 1-5.179 4.387H7.333a5.25 5.25 0 0 1-5.18-4.387l-.663-3.986L.75 15h4.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0-.74.873l.664 3.986A6.75 6.75 0 0 0 7.334 24h9.333a6.75 6.75 0 0 0 6.659-5.64l.664-3.987a.75.75 0 0 0-.74-.873h-10.5a.75.75 0 0 0 0 1.5zM12 19.5H6v-5.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v5.25zm0 1.5a1.5 1.5 0 0 0 1.5-1.5v-5.25A2.25 2.25 0 0 0 11.25 12h-4.5a2.25 2.25 0 0 0-2.25 2.25v5.25A1.5 1.5 0 0 0 6 21h6zm4.5-17.25a2.25 2.25 0 0 1 4.5 0v10.5a.75.75 0 0 0 1.5 0V3.75a3.75 3.75 0 1 0-7.5 0 .75.75 0 0 0 1.5 0zm-3 3a2.25 2.25 0 0 1 4.5 0l.75-.75h-6l.75.75zm-1.5 0c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75 3.75 3.75 0 1 0-7.5 0z'
            ></path></svg
          >
          <span className='ml-2 block text-white text-xl'>{bathroom.title}</span>
        </p>
        <ul
          className='text-white lg:list-disc lg:list-inside flex flex-col items-center lg:items-start'
        >
            {bathroom.data.map((data,i)=>{
         
            return (
            <li key={i} className='mb-1.5 last:mb-0'>{data}</li>
            )
          })}
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}

