import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Welcome = () => {

  const [viewCount, setViewCount] = useState(0);
  const [viewedIds, setViewedIds] = useState([]);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("viewedIds")) || [];
    setViewedIds(ids);
    setViewCount(ids.length);
  }, []);

  useEffect(() => {
    const id = uuidv4(); // Generate a unique ID using a library like 'uuid'
    setViewedIds(prevViewedIds => {
      const newViewedIds = [...prevViewedIds, id];
      localStorage.setItem("viewedIds", JSON.stringify(newViewedIds));
      setViewCount(newViewedIds.length);
      return newViewedIds;
    });
  }, [setViewCount, setViewedIds]);
  


  return (
    <section id='home' className="flex flex-col items-center justify-center h-screen md:h-screen bg-[#000]">
      {/* <h2 className="flex relative w-[100%] -top-[165px] text-4xl text-white justify-center font-bold border-t-8 border-l-8 border-r-8 border-solid border-[#a0ff00] pt-6">WELCOME</h2> */}
      <h1 className='sticky top-0 text-[#ff3030] text-center'>&#9888; This website is under construction! Please use laptop browser or active desktop-mode on mobile browser for better view.</h1>
      <h1 className="flex relative w-[100%] bottom-[125px] text-6xl text-white justify-center font-bold">WELCOME</h1>
      <div className="relative text-black w-[100%] font-bold border-2 border-solid border-white text-center bg-green-500 lg:p-2 p-0">You viewed this webpage {viewCount} times.</div>
      <div className="m-0 p-0">
        <p className="relative lg:text-xl lg:top-[175px] text-sm text-white text-center lg:mx-28 mx-2">
          Hello and welcome to my portfolio! I am thrilled to have you here and to share my work with you.
          This portfolio represents my passion, creativity, and dedication to my craft. Whether you are a potential client,
          colleague, friends or just curious about my work, I hope that you will find this portfolio informative and engaging.
          Thank you for taking the time to visit, and I look forward to  <a href="#social-media" className='text-fuchsia-500'>connect</a> with you.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
