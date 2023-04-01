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
    setViewedIds([...viewedIds, id]);
    localStorage.setItem("viewedIds", JSON.stringify([...viewedIds, id]));
    setViewCount(viewedIds.length + 1);
  }, []);


  return (
    <section id='home' className="flex flex-col items-center justify-center h-screen pt-[70px] bg-[#000]">
      <h2 className="flex relative w-[100%] -top-[247px] text-4xl text-white justify-center font-bold border-t-8 border-l-8 border-r-8 border-solid border-[#a0ff00] pt-6">WELCOME</h2>
      <div className="text-black w-[100%] font-bold border-2 border-solid border-white text-center bg-green-500 p-2">Portfolio viewed {viewCount} times.</div>;
      <div className="">
        <h1 className='relative bottom-[205px] text-[#ff3030] text-center'>&#9888; This website is under construction!</h1>
        <h1 className='relative bottom-[205px] text-[#ff3030] text-center'>&#9888; Please use laptop browser or active desktop-mode on mobile for better view!</h1>
        <p className="text-lg sm:overflow-hidden text-white text-center mx-28">
          Hello and welcome to my portfolio! I am thrilled to have you here and to share my work with you.
          This portfolio represents my passion, creativity, and dedication to my craft. Whether you are a potential client,
          colleague, friends or just curious about my work, I hope that you will find this portfolio informative and engaging.
          Thank you for taking the time to visit, and I look forward to connecting with you soon.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
