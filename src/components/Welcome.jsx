import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


function useWebsiteVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    console.log('useEffect hook called');
    const viewedIds = JSON.parse(localStorage.getItem('viewedIds')) || [];
    console.log('viewedIds:', viewedIds);

    const uniqueViewedIds = new Set(viewedIds);
    console.log('uniqueViewedIds:', uniqueViewedIds);

    setVisitorCount(uniqueViewedIds.size);

    const id = uuidv4();
    uniqueViewedIds.add(id);
    localStorage.setItem('viewedIds', JSON.stringify(Array.from(uniqueViewedIds)));
    console.log('localStorage:', localStorage.getItem('viewedIds'));
  }, []);

  return visitorCount;
}

function WebsiteVisitorCounter() {
  const visitorCount = useWebsiteVisitorCounter();

  return (
    <div className="text-black w-[100%] font-bold border-2 border-solid border-white text-center bg-green-500 p-2">
      Portfolio viewed {visitorCount} times.
    </div>
  );
}

const Welcome = () => {
  return (
    <section id='home' className="flex flex-col items-center justify-center h-screen pt-[69px] bg-[#000]">
      {/* <h2 className="flex relative w-[100%] -top-[165px] text-4xl text-white justify-center font-bold border-t-8 border-l-8 border-r-8 border-solid border-[#a0ff00] pt-6">WELCOME</h2> */}
      <WebsiteVisitorCounter />
      <div className="">
        <h1 className='relative bottom-[205px] text-[#ff3030] text-center'>&#9888; This website is under construction, 
          Please use laptop browser or active desktop-mode on mobile browser for better view! &#9888;</h1>
        <p className="lg:text-lg text-sm text-white text-center mx-28">
          Hello and welcome to my portfolio! I am thrilled to have you here and to share my work with you.
          This portfolio represents my passion, creativity, and dedication to my craft. Whether you are a potential client,
          colleague, friends or just curious about my work, I hope that you will find this portfolio informative and engaging.
          Thank you for taking the time to visit, and I look forward to  <a href="#social_handles" onclick="playAnimation()" className='text-fuchsia-500'>connect</a> with you.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
