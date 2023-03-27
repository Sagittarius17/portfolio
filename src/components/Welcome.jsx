import React from 'react';

function Welcome() {
  return (
    <section id='home' className="flex flex-col items-center justify-center h-screen bg-[#000]">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to my website!</h1>
      <p className="text-lg text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lorem vel dui bibendum, at ullamcorper nisi congue. Praesent efficitur mi vel blandit tristique.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </section>
  );
}

export default Welcome;
