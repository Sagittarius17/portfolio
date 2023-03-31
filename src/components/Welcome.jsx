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

  // useEffect(() => {
  //   const id = uuidv4(); // Generate a unique ID using a library like 'uuid'
  //   setViewedIds([...viewedIds, id]);
  //   localStorage.setItem("viewedIds", JSON.stringify([...viewedIds, id]));
  //   setViewCount(viewedIds.length + 1);
  // }, []);


  return (
    <section id='home' className="flex flex-col items-center justify-center h-screen pt-[70px] bg-[#000]">
      <h2 className="flex relative w-[100%] sm:flex text-6xl text-white justify-center font-bold border-t-8 border-l-8 border-r-8 border-solid border-[#a0ff00] pt-6">Welcome to my website!</h2>
      <div className="my-[247px]">
        <div className="text-black font-bold border-2 border-solid border-blue-500 text-center bg-green-500 p-2">Portfolio viewed {viewCount} times (will count only unique devices which visited this website).</div>;
        <p className="text-lg text-white text-center mx-10">
          Hello and welcome to my portfolio! I am thrilled to have you here and to share my work with you.
          This portfolio represents my passion, creativity, and dedication to my craft. Whether you are a potential client,
          colleague, or just curious about my work, I hope that you will find this portfolio informative and engaging.
          Thank you for taking the time to visit, and I look forward to connecting with you soon.
        </p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
        </button> */}
      </div>
    </section>
  );
}

export default Welcome;
