import React from "react";

function PastWork() {
  return (
    <section id="pastworks" className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Past Work
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Past Work Item 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://via.placeholder.com/300x200.png?text=Project+1"
              alt="Project 1"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">
                Project 1
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
              <p className="mt-2 text-gray-600">
              Over the past six months, I had the opportunity to work as an intern in a tech company. 
              During this time, I was able to gain hands-on experience in a wide range of technologies, 
              including PHP Laravel, jQuery, Bootstrap, Vue.js, Python, Selenium, and automation.
              </p>
              <p className="mt-2 text-gray-600">
              Over the past six months, I had the opportunity to work as an intern in a tech company. 
              During this time, I was able to gain hands-on experience in a wide range of technologies, 
              including PHP Laravel, jQuery, Bootstrap, Vue.js, Python, Selenium, and automation.
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
