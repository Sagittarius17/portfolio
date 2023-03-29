import React from 'react';

function Welcome() {
  return (
    <section id='home' className="flex flex-col items-center justify-center h-screen bg-[#000]">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to my website!</h1>
      <p className="text-lg text-white mx-10 my-8 text-center">
        Hello and welcome to my portfolio! I am thrilled to have you here and to share my work with you. 
        This portfolio represents my passion, creativity, and dedication to my craft. Whether you are a potential client, 
        colleague, or just curious about my work, I hope that you will find this portfolio informative and engaging. 
        Thank you for taking the time to visit, and I look forward to connecting with you soon.
      </p>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button> */}
    </section>
  );
}

export default Welcome;
