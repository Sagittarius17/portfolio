import React, { useState } from 'react';
// import PdfViewer from 'react-pdf';
import pythonCertificate from '../assets/resume.jpeg'

function PastWork() {

  // const pdfFile = '../assets/python-certificate.pdf';
  const [showPdf, setShowPdf] = useState(false);

  const togglePdf = () => {
    setShowPdf(!showPdf);
  };

  return (
    <section id="pastworks" className="pt-[69px]">
      <h2 className="flex sm:flex text-4xl text-white justify-center font-bold border-t-8 border-l-8 border-r-8 border-solid border-[#a0ff00] pt-6">PAST WORK EX.</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-12">
          {/* Past Work Item 1 */}
          <div className="bg-white pb-12 shadow-lg rounded-lg overflow-hidden">
            {/* <img
              className="h-48 w-full object-cover"
              src="https://via.placeholder.com/300x200.png?text=Project+1"
              alt="Project 1"
            /> */}
            <div className='flex flex-col justify-center'>
              <button onClick={togglePdf} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                {showPdf ? 'Hide Internship Certificate' : 'Show Internship Certificate'}
              </button>
              {showPdf && (
                <div className='flex justify-center'>
                  <img src={pythonCertificate} alt="resume" className=''/>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Past work as an Intern
              </h3>
              <p className="mt-2 text-gray-600">
                Over the past six months, I had the opportunity to work as an intern in a tech company.
                During this time, I was able to gain hands-on experience in a wide range of technologies,
                including PHP Laravel, jQuery, Bootstrap, Vue.js, Python, Selenium, and automation.
              </p>
              <p className="mt-2 text-gray-600">
                I started my internship by working on PHP Laravel, where I learned how to create web applications using the framework.
                This was followed by working on jQuery, which helped me to improve my frontend development skills.
                I also worked with Bootstrap, which made my UI development much easier.
              </p>
              <p className="mt-2 text-gray-600">
                Later on, I had the opportunity to learn and work with Vue.js, a popular frontend framework for building interactive web applications.
                This was a great learning experience for me as I was able to understand how the framework works and how to use it to build efficient and dynamic web applications.
              </p>
              <p className="mt-2 text-gray-600 font-semibold">
                During my internship, I gained valuable experience in using Python for automation. I learned how to write efficient and effective
                scripts to automate tasks such as data extraction, data entry, sign in, log in, online payment, testing, and reporting. This allowed me to save significant time and resources, and greatly improve
                the efficiency of the projects I worked on. My experience with Python automation has provided me with a valuable skillset that I can apply to a wide
                range of industries and roles.
              </p>

            </div>
          </div>

          {/* Add more Past Work Items here */}
        </div>
      </div>
    </section>
  );
}

export default PastWork;
